import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Create a new link
export const createLink = mutation({
  args: {
    userId: v.id("users"),
    url: v.string(),
    label: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("links", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// Get all links for a user
export const getLinks = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("links")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .order("asc")
      .collect();
  },
});

// Update link
export const updateLink = mutation({
  args: {
    linkId: v.id("links"),
    url: v.optional(v.string()),
    label: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.linkId, { ...args });
  },
});

// Delete link
export const deleteLink = mutation({
  args: { linkId: v.id("links") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.linkId);
  },
});
