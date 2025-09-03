"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import { 
  CheckCircle, 
  Clock, 
  Lock, 
  PlayCircle,
  BookOpen,
  Trophy,
  ChevronRight
} from "lucide-react";

type LessonItem = {
  id: string;
  title: string;
  order: number;
  estimatedTime: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  completed: boolean;
  locked: boolean;
};

type GroupData = {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: LessonItem[];
  progress: {
    completed: number;
    total: number;
  };
};

type LessonNavigationProps = {
  language: string;
  groups: GroupData[];
  currentGroup?: string;
  currentLesson?: string;
  onNavigate?: (language: string, group: string, lesson: string) => void;
};

export function LessonNavigation({
  language,
  groups,
  currentGroup,
  currentLesson,
  onNavigate,
}: LessonNavigationProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getLanguageDisplayName = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "c":
        return "C Programming";
      case "python":
        return "Python";
      case "javascript":
        return "JavaScript";
      case "ethical-hacking":
        return "Ethical Hacking";
      default:
        return lang.charAt(0).toUpperCase() + lang.slice(1);
    }
  };

  const totalProgress = groups.reduce(
    (acc, group) => ({
      completed: acc.completed + group.progress.completed,
      total: acc.total + group.progress.total,
    }),
    { completed: 0, total: 0 }
  );

  return (
    <div className="space-y-6">
      {/* Language Header */}
      <div className="text-center pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">
          {getLanguageDisplayName(language)}
        </h1>
        <p className="text-muted-foreground mb-4">
          Master the fundamentals and advance to expert level
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <Progress 
              value={totalProgress.total > 0 ? (totalProgress.completed / totalProgress.total) * 100 : 0} 
              className="w-32" 
            />
            <span className="text-sm font-medium">
              {totalProgress.completed}/{totalProgress.total} lessons
            </span>
          </div>
          <Badge variant="outline">
            <Trophy className="h-3 w-3 mr-1" />
            {Math.round((totalProgress.completed / totalProgress.total) * 100) || 0}% Complete
          </Badge>
        </div>
      </div>

      {/* Groups */}
      <div className="space-y-4">
        {groups.map((group) => (
          <Card key={group.id} className="transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>{group.title}</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {group.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Progress 
                    value={(group.progress.completed / group.progress.total) * 100} 
                    className="w-20" 
                  />
                  <span className="text-sm text-muted-foreground">
                    {group.progress.completed}/{group.progress.total}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-2">
                {group.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      currentLesson === lesson.id
                        ? "bg-primary/10 border-primary"
                        : "hover:bg-muted/50"
                    } ${lesson.locked ? "opacity-50" : ""}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : lesson.locked ? (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <PlayCircle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">
                            {lesson.order}. {lesson.title}
                          </span>
                          <Badge 
                            variant="secondary" 
                            className={getDifficultyColor(lesson.difficulty)}
                          >
                            {lesson.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {lesson.estimatedTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {lesson.locked ? (
                        <Button size="sm" variant="ghost" disabled>
                          Locked
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant={currentLesson === lesson.id ? "default" : "ghost"}
                          asChild
                        >
                          <Link href={`/learn/${language}/${group.id}/${lesson.id}`}>
                            {lesson.completed ? "Review" : "Start"}
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}