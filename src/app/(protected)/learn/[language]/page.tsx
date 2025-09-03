import { notFound } from "next/navigation";
import { LessonNavigation } from "./_components/LessonNavigation";
import { getLanguageStructure } from "~/lib/lesson/markdown";

type LanguagePageProps = {
  params: {
    language: string;
  };
};

export default async function LanguagePage({ params }: LanguagePageProps) {
  const { language } = params;

  const languageStructure = await getLanguageStructure(language);

  if (!languageStructure) {
    notFound();
  }

  // Transform data for LessonNavigation component
  const groups = languageStructure.groups.map((group) => ({
    id: group.slug,
    title: group.metadata.title,
    description: group.metadata.description,
    order: group.metadata.order,
    lessons: group.lessons.map((lesson) => ({
      id: lesson.slug,
      title: lesson.metadata.title,
      order: lesson.metadata.order,
      estimatedTime: lesson.metadata.estimatedTime,
      difficulty: lesson.metadata.difficulty,
      completed: false, // TODO: Get from user progress
      locked: false, // TODO: Implement locking logic
    })),
    progress: {
      completed: 0, // TODO: Get from user progress
      total: group.lessons.length,
    },
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <LessonNavigation language={language} groups={groups} />
    </div>
  );
}
