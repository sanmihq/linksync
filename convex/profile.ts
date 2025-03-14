import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Create profile
export const createProfile = mutation({
  args: {
    userId: v.id("users"),
    bio: v.optional(v.string()),
    theme: v.optional(v.string()),
    profilePictureUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("profiles", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// Get profile by userId
export const getProfile = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("profiles")
      //   .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .unique();
  },
});

// Update profile
export const updateProfile = mutation({
  args: {
    userId: v.id("users"),
    bio: v.optional(v.string()),
    theme: v.optional(v.string()),
    profilePictureUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const profile = await ctx.db
      .query("profiles")
      //   .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .unique();
    if (!profile) throw new Error("Profile not found");

    await ctx.db.patch(profile._id, { ...args });
  },
});

// Delete profile
export const deleteProfile = mutation({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .unique();
    if (!profile) throw new Error("Profile not found");

    await ctx.db.delete(profile._id);
  },
});
