// Convex schema is now defined in /convex/schema.ts
// This file is kept for compatibility but redirects to Convex types

export type Post = {
  _id: string;
  _creationTime: number;
  name: string;
  createdAt: number;
  updatedAt?: number;
};
