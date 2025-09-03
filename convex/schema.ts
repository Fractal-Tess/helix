import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    name: v.string(),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
  }).index("by_created_at", ["createdAt"]),

  // User profile with XP and level system
  profile: defineTable({
    userId: v.string(),
    level: v.number(),
    xp: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_userId", ["userId"]),

  // User lesson progress tracking
  userLessonProgress: defineTable({
    userId: v.string(),
    language: v.string(),
    group: v.string(),
    lesson: v.string(),
    completed: v.boolean(),
    code: v.optional(v.string()), // User's submitted code
    completedAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_user_language", ["userId", "language"])
    .index("by_user_lesson", ["userId", "language", "group", "lesson"]),

  // User learning streaks and statistics
  userStats: defineTable({
    userId: v.string(),
    currentStreak: v.number(),
    longestStreak: v.number(),
    totalLessonsCompleted: v.number(),
    totalTimeSpent: v.number(), // in minutes
    lastActiveDate: v.optional(v.string()), // YYYY-MM-DD format
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
  }).index("by_user", ["userId"]),

  // Language progress tracking
  userLanguageProgress: defineTable({
    userId: v.string(),
    language: v.string(),
    totalGroups: v.number(),
    completedGroups: v.number(),
    totalLessons: v.number(),
    completedLessons: v.number(),
    progressPercentage: v.number(),
    lastAccessedAt: v.number(),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_user_language", ["userId", "language"]),

  // Achievement tracking
  userAchievements: defineTable({
    userId: v.string(),
    achievementType: v.string(), // "first_lesson", "complete_group", "streak_7", etc.
    title: v.string(),
    description: v.string(),
    earnedAt: v.number(),
    metadata: v.optional(v.object({
      language: v.optional(v.string()),
      group: v.optional(v.string()),
      streakDays: v.optional(v.number()),
    })),
  })
    .index("by_user", ["userId"])
    .index("by_user_type", ["userId", "achievementType"]),
});