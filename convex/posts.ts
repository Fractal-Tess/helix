import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db.insert("posts", {
      name: args.name,
      createdAt: Date.now(),
    });
    return post;
  },
});

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query("posts").order("desc").collect();
    return posts;
  },
});

export const getLatest = query({
  args: {},
  handler: async (ctx) => {
    const post = await ctx.db.query("posts").order("desc").first();
    return post ?? null;
  },
});