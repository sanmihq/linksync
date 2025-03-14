import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users Table (Optional, since Clerk manages auth)
  users: defineTable({
    userId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_userId", ["userId"]),

  // Profiles Table (Stores user profile settings)
  profiles: defineTable({
    userId: v.id("users"),
    bio: v.optional(v.string()),
    theme: v.optional(v.string()), // "dark" or "light"
    profilePictureUrl: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_userId", ["userId"]),

  // Links Table (Stores user links)
  links: defineTable({
    userId: v.id("users"),
    url: v.string(),
    label: v.string(),
    order: v.number(),
    createdAt: v.number(),
  }).index("by_userId", ["userId"]),
});
