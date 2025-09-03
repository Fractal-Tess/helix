import type { LanguageStructure, ParsedGroup, ParsedLesson } from "./markdown";

export type UserProgress = {
  userId: string;
  language: string;
  group: string;
  lesson: string;
  completed: boolean;
  code?: string;
  completedAt?: Date;
};

export type GroupProgress = {
  groupId: string;
  totalLessons: number;
  completedLessons: number;
  progressPercentage: number;
  isUnlocked: boolean;
  lessons: LessonProgress[];
};

export type LessonProgress = {
  lessonId: string;
  title: string;
  order: number;
  difficulty: string;
  estimatedTime: string;
  completed: boolean;
  isUnlocked: boolean;
  userCode?: string;
};

export type LanguageProgress = {
  language: string;
  totalGroups: number;
  completedGroups: number;
  totalLessons: number;
  completedLessons: number;
  progressPercentage: number;
  groups: GroupProgress[];
};

/**
 * Calculate progress for a specific group
 */
export function calculateGroupProgress(
  group: ParsedGroup,
  userProgress: UserProgress[]
): GroupProgress {
  const groupProgress = userProgress.filter(
    (p) => p.group === group.slug
  );

  const lessons: LessonProgress[] = group.lessons.map((lesson, index) => {
    const lessonUserProgress = groupProgress.find(
      (p) => p.lesson === lesson.slug
    );

    // First lesson is always unlocked, others unlock when previous is completed
    const isUnlocked = index === 0 || 
      (index > 0 && groupProgress.some(p => 
        p.lesson === group.lessons[index - 1]!.slug && p.completed
      ));

    return {
      lessonId: lesson.slug,
      title: lesson.metadata.title,
      order: lesson.metadata.order,
      difficulty: lesson.metadata.difficulty,
      estimatedTime: lesson.metadata.estimatedTime,
      completed: lessonUserProgress?.completed || false,
      isUnlocked,
      userCode: lessonUserProgress?.code,
    };
  });

  const completedLessons = lessons.filter(l => l.completed).length;
  const totalLessons = lessons.length;

  return {
    groupId: group.slug,
    totalLessons,
    completedLessons,
    progressPercentage: totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0,
    isUnlocked: true, // Groups are always unlocked for now, can add logic later
    lessons,
  };
}

/**
 * Calculate progress for an entire language
 */
export function calculateLanguageProgress(
  languageStructure: LanguageStructure,
  userProgress: UserProgress[]
): LanguageProgress {
  const languageUserProgress = userProgress.filter(
    (p) => p.language === languageStructure.language
  );

  const groups: GroupProgress[] = languageStructure.groups.map((group) =>
    calculateGroupProgress(group, languageUserProgress)
  );

  const totalGroups = groups.length;
  const completedGroups = groups.filter(
    (g) => g.progressPercentage === 100
  ).length;

  const totalLessons = groups.reduce((sum, g) => sum + g.totalLessons, 0);
  const completedLessons = groups.reduce(
    (sum, g) => sum + g.completedLessons,
    0
  );

  return {
    language: languageStructure.language,
    totalGroups,
    completedGroups,
    totalLessons,
    completedLessons,
    progressPercentage: totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0,
    groups,
  };
}

/**
 * Get next recommended lesson for a user
 */
export function getNextLesson(
  languageProgress: LanguageProgress
): { language: string; group: string; lesson: string } | null {
  // Find the first incomplete lesson in order
  for (const group of languageProgress.groups) {
    if (!group.isUnlocked) continue;
    
    for (const lesson of group.lessons) {
      if (!lesson.completed && lesson.isUnlocked) {
        return {
          language: languageProgress.language,
          group: group.groupId,
          lesson: lesson.lessonId,
        };
      }
    }
  }
  
  return null;
}

/**
 * Calculate learning streak
 */
export function calculateStreak(userProgress: UserProgress[]): {
  currentStreak: number;
  longestStreak: number;
} {
  if (userProgress.length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  // Group completions by date
  const completionsByDate = new Map<string, number>();
  
  userProgress
    .filter(p => p.completed && p.completedAt)
    .forEach(p => {
      const date = p.completedAt!.toISOString().split('T')[0];
      completionsByDate.set(date, (completionsByDate.get(date) || 0) + 1);
    });

  const dates = Array.from(completionsByDate.keys()).sort();
  
  if (dates.length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 1;

  // Calculate current streak (from today backwards)
  const today = new Date().toISOString().split('T')[0];
  let checkDate = new Date();
  
  const firstDate = dates[0];
  if (!firstDate) return { currentStreak: 0, longestStreak: 0 };
  
  while (checkDate >= new Date(firstDate)) {
    const dateStr = checkDate.toISOString().split('T')[0];
    if (completionsByDate.has(dateStr)) {
      currentStreak++;
    } else if (dateStr !== today) {
      // Break streak if we find a day without completion (except today)
      break;
    }
    checkDate.setDate(checkDate.getDate() - 1);
  }

  // Calculate longest streak
  for (let i = 1; i < dates.length; i++) {
    const prevDateStr = dates[i - 1];
    const currentDateStr = dates[i];
    
    if (!prevDateStr || !currentDateStr) continue;
    
    const prevDate = new Date(prevDateStr);
    const currentDate = new Date(currentDateStr);
    const dayDiff = (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (dayDiff === 1) {
      tempStreak++;
    } else {
      longestStreak = Math.max(longestStreak, tempStreak);
      tempStreak = 1;
    }
  }
  
  longestStreak = Math.max(longestStreak, tempStreak);

  return { currentStreak, longestStreak };
}

/**
 * Get achievement data based on progress
 */
export function calculateAchievements(
  userProgress: UserProgress[],
  languageProgress: LanguageProgress[]
): Array<{
  type: string;
  title: string;
  description: string;
  earned: boolean;
  earnedAt?: Date;
  metadata?: Record<string, any>;
}> {
  const achievements = [];
  const { currentStreak } = calculateStreak(userProgress);
  const totalCompleted = userProgress.filter(p => p.completed).length;

  // First lesson achievement
  achievements.push({
    type: "first_lesson",
    title: "Getting Started",
    description: "Complete your first lesson",
    earned: totalCompleted >= 1,
    earnedAt: userProgress.find(p => p.completed)?.completedAt,
  });

  // Streak achievements
  [3, 7, 14, 30].forEach(days => {
    achievements.push({
      type: `streak_${days}`,
      title: `${days}-Day Streak`,
      description: `Learn for ${days} consecutive days`,
      earned: currentStreak >= days,
      metadata: { streakDays: days },
    });
  });

  // Language completion achievements
  languageProgress.forEach(lang => {
    if (lang.progressPercentage === 100) {
      achievements.push({
        type: "language_complete",
        title: `${lang.language.charAt(0).toUpperCase() + lang.language.slice(1)} Master`,
        description: `Complete all lessons in ${lang.language}`,
        earned: true,
        metadata: { language: lang.language },
      });
    }
  });

  return achievements;
}