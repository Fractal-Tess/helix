import { v } from "convex/values";
import type { Doc, Id } from "./_generated/dataModel";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import { mutation, query } from "./_generated/server";

function xpForNextLevel(level: number): number {
  // Base 100, grows 25% per level
  return Math.floor(100 * Math.pow(1.25, Math.max(0, level - 1)));
}

async function readUserXp(
  ctx: QueryCtx | MutationCtx,
  userId: string
): Promise<Doc<"profile"> | null> {
  return ctx.db
    .query("profile")
    .withIndex("by_userId", (q) => q.eq("userId", userId))
    .first();
}

async function ensureUserXp(
  ctx: MutationCtx,
  userId: string
): Promise<Doc<"profile">> {
  const existing = await readUserXp(ctx, userId);
  if (existing) return existing;
  const now = Date.now();
  const id: Id<"profile"> = await ctx.db.insert("profile", {
    userId,
    level: 1,
    xp: 0,
    createdAt: now,
    updatedAt: now,
  });
  const created = await ctx.db.get(id);
  if (!created) throw new Error("Failed to create profile record");
  return created;
}

export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    const record = await readUserXp(ctx, identity.subject);
    const level = record?.level ?? 1;
    const xp = record?.xp ?? 0;
    const next = xpForNextLevel(level);
    const progress = next === 0 ? 0 : Math.max(0, Math.min(1, xp / next));

    return {
      userId: identity.subject,
      level,
      xp,
      xpForNextLevel: next,
      progress,
    };
  },
});

export const addXp = mutation({
  args: { amount: v.number() },
  handler: async (ctx, { amount }) => {
    if (amount <= 0) return null;

    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    const user = await ensureUserXp(ctx, identity.subject);

    let level = user.level;
    let xp = user.xp + amount;

    // Level up while XP exceeds threshold; keep remainder in current level
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const need = xpForNextLevel(level);
      if (xp >= need) {
        xp -= need;
        level += 1;
      } else {
        break;
      }
    }

    await ctx.db.patch(user._id, {
      level,
      xp,
      updatedAt: Date.now(),
    });

    const next = xpForNextLevel(level);
    const progress = next === 0 ? 0 : Math.max(0, Math.min(1, xp / next));

    return {
      userId: user.userId,
      level,
      xp,
      xpForNextLevel: next,
      progress,
    };
  },
});