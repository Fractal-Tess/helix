import { api } from "convex/_generated/api";
import { useQuery, useMutation } from "convex/react";

export type LevelProfile = {
  userId: string;
  level: number;
  xp: number;
  xpForNextLevel: number;
  progress: number;
};

export function useProfile() {
  const profile = useQuery(api.users.getProfile);
  const addXpMutation = useMutation(api.users.addXp);

  const addXp = async (amount: number) => {
    return await addXpMutation({ amount });
  };

  return {
    profile,
    addXp,
    isLoading: profile === undefined,
  };
}