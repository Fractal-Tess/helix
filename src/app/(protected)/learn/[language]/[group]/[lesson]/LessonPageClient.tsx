"use client";

import { useRouter } from "next/navigation";
import { LessonViewer } from "./_components/LessonViewer";
import { useProfile } from "~/hooks/useProfile";
import { toast } from "sonner";

// Calculate XP reward based on lesson difficulty
function calculateLessonXP(
  difficulty: "beginner" | "intermediate" | "advanced",
): number {
  switch (difficulty) {
    case "beginner":
      return 10;
    case "intermediate":
      return 15;
    case "advanced":
      return 25;
    default:
      return 10;
  }
}

type LessonData = {
  title: string;
  description: string;
  content: string;
  order: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  language: string;
  group: string;
  startingCode?: string;
  expectedOutput?: string;
};

type NavigationData = {
  prev: { language: string; group: string; lesson: string } | null;
  next: { language: string; group: string; lesson: string } | null;
};

type GroupProgress = {
  completed: number;
  total: number;
};

type LessonPageClientProps = {
  lesson: LessonData;
  navigation: NavigationData;
  groupProgress: GroupProgress;
};

export function LessonPageClient({
  lesson,
  navigation,
  groupProgress,
}: LessonPageClientProps) {
  const router = useRouter();
  const { addXp } = useProfile();

  const handleCodeChange = (code: string) => {
    // TODO: Save user code to database
    console.log("Code changed:", code);
  };

  const handleMarkComplete = async () => {
    try {
      // TODO: Mark lesson as complete in database
      console.log("Marking lesson complete");

      // Award XP for completing the lesson
      const xpReward = calculateLessonXP(lesson.difficulty);
      const result = await addXp(xpReward);

      if (result) {
        // Check if user leveled up by comparing with previous level
        // Since we don't have previous level, we'll use a simple heuristic:
        // if XP is low relative to what's needed for next level, they likely leveled up
        const wasLevelUp = result.xp < xpReward;

        if (wasLevelUp) {
          toast.success(`🎉 Level Up! You're now level ${result.level}!`, {
            description: `You earned ${xpReward} XP for completing this lesson`,
            duration: 5000,
          });
        } else {
          toast.success(`+${xpReward} XP earned!`, {
            description: `Great job completing "${lesson.title}"`,
            duration: 3000,
          });
        }
      }
    } catch (error) {
      console.error("Error completing lesson:", error);
      toast.error("Failed to complete lesson. Please try again.");
    }
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev" && navigation.prev) {
      router.push(
        `/learn/${navigation.prev.language}/${navigation.prev.group}/${navigation.prev.lesson}`,
      );
    } else if (direction === "next" && navigation.next) {
      router.push(
        `/learn/${navigation.next.language}/${navigation.next.group}/${navigation.next.lesson}`,
      );
    }
  };

  return (
    <div className="-m-6 flex h-svh flex-col overflow-hidden">
      <LessonViewer
        lesson={lesson}
        isCompleted={false} // TODO: Get from user progress
        onCodeChange={handleCodeChange}
        onMarkComplete={handleMarkComplete}
        onNavigate={handleNavigate}
        hasNext={!!navigation.next}
        hasPrev={!!navigation.prev}
        groupProgress={groupProgress}
      />
    </div>
  );
}
