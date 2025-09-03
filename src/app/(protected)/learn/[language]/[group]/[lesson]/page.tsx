import { notFound } from "next/navigation";
import { LessonPageClient } from "./LessonPageClient";
import {
  getLessonData,
  getGroupMetadata,
  getLessonNavigation,
} from "~/lib/lesson/markdown";

type LessonPageProps = {
  params: {
    language: string;
    group: string;
    lesson: string;
  };
};

export default async function LessonPage({ params }: LessonPageProps) {
  const resolvedParams = await params;
  const { language, group, lesson } = resolvedParams;

  // Get lesson data
  const lessonData = await getLessonData(language, group, lesson);

  if (!lessonData) {
    notFound();
  }

  // Get group data for progress tracking
  const groupData = await getGroupMetadata(language, group);

  if (!groupData) {
    notFound();
  }

  // Get navigation data
  const navigation = await getLessonNavigation(language, group, lesson);

  // Transform lesson data for the viewer
  const transformedLesson = {
    title: lessonData.metadata.title,
    description: lessonData.metadata.description,
    content: lessonData.content,
    order: lessonData.metadata.order,
    difficulty: lessonData.metadata.difficulty,
    estimatedTime: lessonData.metadata.estimatedTime,
    language: lessonData.metadata.language,
    group: lessonData.metadata.group,
    startingCode: lessonData.metadata.startingCode,
    expectedOutput: lessonData.metadata.expectedOutput,
  };

  // Calculate group progress
  const groupProgress = {
    completed: 0, // TODO: Get from user progress
    total: groupData.lessons.length,
  };

  return (
    <LessonPageClient
      lesson={transformedLesson}
      navigation={navigation}
      groupProgress={groupProgress}
    />
  );
}

// Generate static params for all lessons
export async function generateStaticParams() {
  // This would be implemented to generate all possible lesson paths
  // For now, we'll let Next.js handle dynamic routing
  return [];
}
