import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new user
export const createUser = mutation({
  args: { userId: v.string(), email: v.string(), name: v.optional(v.string()) },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// Get user by Clerk userId
export const getUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .unique();
  },
});

// Update user
export const updateUser = mutation({
  args: { userId: v.string(), name: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .unique();
    if (!user) throw new Error("User not found");

    await ctx.db.patch(user._id, { ...args });
  },
});

// Delete user
export const deleteUser = mutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .unique();
    if (!user) throw new Error("User not found");

    await ctx.db.delete(user._id);
  },
});
