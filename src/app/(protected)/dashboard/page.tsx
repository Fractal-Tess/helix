import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Target, 
  Code, 
  ChevronRight,
  PlayCircle
} from "lucide-react";
import { getAvailableLanguages, getLanguageStructure } from "~/lib/lesson/markdown";

export default async function DashboardPage() {
  const availableLanguages = getAvailableLanguages();
  
  // Get language structures for progress display
  const languageStructures = [];
  for (const language of availableLanguages.slice(0, 4)) { // Show first 4 languages
    const structure = await getLanguageStructure(language);
    if (structure) {
      languageStructures.push(structure);
    }
  }

  // Calculate totals
  const totalLessons = languageStructures.reduce(
    (sum, structure) => sum + structure.groups.reduce(
      (groupSum, group) => groupSum + group.lessons.length, 0
    ), 0
  );

  const getLanguageIcon = (language: string) => {
    switch (language.toLowerCase()) {
      case "c":
      case "javascript":
      case "python":
        return <Code className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getLanguageDisplayName = (language: string) => {
    switch (language.toLowerCase()) {
      case "c":
        return "C Programming";
      case "javascript":
        return "JavaScript";
      case "python":
        return "Python";
      default:
        return language.charAt(0).toUpperCase() + language.slice(1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your learning progress overview.
          </p>
        </div>
        <Button asChild>
          <Link href="/learn">
            <PlayCircle className="h-4 w-4 mr-2" />
            Continue Learning
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Languages</CardTitle>
            <BookOpen className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{availableLanguages.length}</div>
            <p className="text-muted-foreground text-xs">
              {availableLanguages.length > 0 ? "Ready to learn" : "Coming soon"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Lessons
            </CardTitle>
            <Trophy className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLessons}</div>
            <p className="text-muted-foreground text-xs">0 completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0h 0m</div>
            <p className="text-muted-foreground text-xs">Start your first lesson!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Streak
            </CardTitle>
            <Target className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 days</div>
            <p className="text-muted-foreground text-xs">Begin your journey!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>
              Your progress across different programming languages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {languageStructures.length > 0 ? (
              languageStructures.map((structure) => (
                <div key={structure.language} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getLanguageIcon(structure.language)}
                      <span className="text-sm font-medium">
                        {getLanguageDisplayName(structure.language)}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    0 of {structure.groups.reduce((sum, g) => sum + g.lessons.length, 0)} lessons completed
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  No learning content available yet.
                </p>
                <p className="text-xs text-muted-foreground">
                  Check back soon for new lessons!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>
              Jump into your learning journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {languageStructures.length > 0 ? (
              languageStructures.slice(0, 3).map((structure) => (
                <div key={structure.language} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getLanguageIcon(structure.language)}
                    <div>
                      <p className="text-sm font-medium">
                        {getLanguageDisplayName(structure.language)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {structure.groups.length} groups • {structure.groups.reduce((sum, g) => sum + g.lessons.length, 0)} lessons
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/learn/${structure.language}`}>
                      Start
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-3">
                  Lessons are being prepared for you!
                </p>
                <Button variant="outline" asChild>
                  <Link href="/learn">
                    Explore Learning Hub
                  </Link>
                </Button>
              </div>
            )}

            {languageStructures.length > 3 && (
              <div className="pt-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/learn">
                    View All Languages
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
