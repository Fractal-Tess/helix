"use client";

import { useState, useEffect } from "react";
import { CodeEditor } from "./CodeEditor";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import {
  CheckCircle,
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Target,
  Lightbulb,
  Play,
  RotateCcw,
} from "lucide-react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "~/components/ui/resizable";

type LessonData = {
  title: string;
  description: string;
  content: string; // rendered HTML from markdown
  order: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  language: string;
  group: string;
  startingCode?: string;
  expectedOutput?: string;
};

type LessonViewerProps = {
  lesson: LessonData;
  userCode?: string;
  isCompleted?: boolean;
  onCodeChange?: (code: string) => void;
  onMarkComplete?: () => void;
  onNavigate?: (direction: "prev" | "next") => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  groupProgress?: {
    completed: number;
    total: number;
  };
};

export function LessonViewer({
  lesson,
  userCode,
  isCompleted = false,
  onCodeChange,
  onMarkComplete,
  onNavigate,
  hasNext = false,
  hasPrev = false,
  groupProgress,
}: LessonViewerProps) {
  const [currentCode, setCurrentCode] = useState(
    userCode || lesson.startingCode || "",
  );
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (userCode) {
      setCurrentCode(userCode);
    }
  }, [userCode]);

  const handleCodeChange = (code: string) => {
    setCurrentCode(code);
    onCodeChange?.(code);
  };

  const handleRunCode = async (code: string) => {
    setIsRunning(true);
    try {
      // Simulate code execution - in a real app, this would send to a secure sandbox
      setOutput(
        "// Simulated output\n// In a real implementation, this would run in a secure sandbox",
      );

      // For demonstration, show expected output if it exists
      if (lesson.expectedOutput) {
        setTimeout(() => {
          setOutput(lesson.expectedOutput || "");
        }, 1000);
      }
    } finally {
      setIsRunning(false);
    }
  };

  const handleResetCode = () => {
    setCurrentCode(lesson.startingCode || "");
    onCodeChange?.(lesson.startingCode || "");
  };

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

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 flex-shrink-0 border-b p-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate?.("prev")}
                disabled={!hasPrev}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate?.("next")}
                disabled={!hasNext}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {groupProgress && (
              <div className="flex items-center space-x-2">
                <Progress
                  value={(groupProgress.completed / groupProgress.total) * 100}
                  className="w-24"
                />
                <span className="text-muted-foreground text-sm">
                  {groupProgress.completed}/{groupProgress.total}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {isCompleted && (
              <Badge variant="default" className="bg-green-600">
                <CheckCircle className="mr-1 h-3 w-3" />
                Completed
              </Badge>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleResetCode}
              disabled={isRunning}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
            <Button
              size="sm"
              onClick={() => handleRunCode(currentCode)}
              disabled={isRunning}
            >
              <Play className="h-4 w-4" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-0 flex-1">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Lesson Content Panel */}
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto p-6">
                {/* Lesson Header */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center space-x-2">
                    <Badge className={getDifficultyColor(lesson.difficulty)}>
                      {lesson.difficulty}
                    </Badge>
                    <Badge variant="outline">
                      <Clock className="mr-1 h-3 w-3" />
                      {lesson.estimatedTime}
                    </Badge>
                    <Badge variant="outline">
                      <BookOpen className="mr-1 h-3 w-3" />
                      Lesson {lesson.order}
                    </Badge>
                  </div>

                  <h1 className="text-3xl font-bold">{lesson.title}</h1>
                  <p className="text-muted-foreground mt-2 text-lg">
                    {lesson.description}
                  </p>
                </div>

                {/* Lesson Content */}
                <div
                  className="prose prose-slate dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: lesson.content }}
                />

                {/* Expected Output Section */}
                {lesson.expectedOutput && (
                  <Card className="mt-6">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center text-lg">
                        <Target className="mr-2 h-5 w-5" />
                        Expected Output
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-muted overflow-auto rounded p-3 text-sm">
                        {lesson.expectedOutput}
                      </pre>
                    </CardContent>
                  </Card>
                )}

                {/* Output Section */}
                {output && (
                  <Card className="mt-6">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center text-lg">
                        <Lightbulb className="mr-2 h-5 w-5" />
                        Output
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-muted overflow-auto rounded p-3 text-sm">
                        {output}
                      </pre>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Code Editor Panel */}
          <ResizablePanel defaultSize={50} minSize={30} className="h-full">
            <CodeEditor
              language={lesson.language}
              initialCode={lesson.startingCode || ""}
              onCodeChange={handleCodeChange}
              onRunCode={handleRunCode}
              className="h-full"
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
