import { useConvexClient, useQuery } from 'convex-svelte';
import { api } from '@repo/convex';

export type LevelProfile = {
  userId: string;
  level: number;
  xp: number;
  xpForNextLevel: number;
  progress: number;
};

export function useProfile() {
  const convex = useConvexClient();
  const profile = useQuery(api.users.getProfile, {});

  async function addXp(amount: number) {
    await convex.mutation(api.users.addXp, { amount });
  }

  return {
    profile,
    addXp
  };
}
