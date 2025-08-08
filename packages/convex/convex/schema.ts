import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  profile: defineTable({
    userId: v.string(),
    level: v.number(),
    xp: v.number(),
    createdAt: v.number(),
    updatedAt: v.number()
  }).index('by_userId', ['userId']),
  notes: defineTable({
    userId: v.string(),
    title: v.string(),
    content: v.string()
  })
});
