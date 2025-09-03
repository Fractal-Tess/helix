import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { 
  BookOpen, 
  Code, 
  ChevronRight,
  Trophy,
  Clock
} from "lucide-react";
import { getAvailableLanguages, getLanguageStructure } from "~/lib/lesson/markdown";

type LanguageCardData = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: "beginner" | "intermediate" | "advanced";
  totalLessons: number;
  estimatedTime: string;
  color: string;
};

const languageData: Record<string, LanguageCardData> = {
  c: {
    id: "c",
    title: "C Programming",
    description: "Master the fundamentals of systems programming with C",
    icon: <Code className="h-6 w-6" />,
    difficulty: "beginner",
    totalLessons: 0,
    estimatedTime: "8 hours",
    color: "bg-blue-500",
  },
  python: {
    id: "python",
    title: "Python",
    description: "Learn Python programming from basics to advanced concepts",
    icon: <BookOpen className="h-6 w-6" />,
    difficulty: "beginner",
    totalLessons: 0,
    estimatedTime: "12 hours",
    color: "bg-green-500",
  },
  javascript: {
    id: "javascript",
    title: "JavaScript",
    description: "Build interactive web applications with JavaScript",
    icon: <Code className="h-6 w-6" />,
    difficulty: "beginner",
    totalLessons: 0,
    estimatedTime: "15 hours",
    color: "bg-yellow-500",
  },
};

export default async function LearnPage() {
  const availableLanguages = getAvailableLanguages();
  
  // Get actual lesson counts for each language
  const languageCards: LanguageCardData[] = [];
  
  for (const language of availableLanguages) {
    const structure = await getLanguageStructure(language);
    const baseData = languageData[language];
    
    if (baseData && structure) {
      const totalLessons = structure.groups.reduce(
        (sum, group) => sum + group.lessons.length,
        0
      );
      
      languageCards.push({
        ...baseData,
        totalLessons,
      });
    }
  }

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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Choose Your Learning Path</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master programming languages and cybersecurity through hands-on practice. 
          Each path is designed to take you from beginner to expert.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">
                {languageCards.reduce((sum, lang) => sum + lang.totalLessons, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Lessons</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{languageCards.length}</p>
              <p className="text-sm text-muted-foreground">Languages</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Achievements</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Language Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languageCards.map((language) => (
          <Card 
            key={language.id} 
            className="group hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg text-white ${language.color}`}>
                    {language.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{language.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language.description}
                    </p>
                  </div>
                </div>
                <Badge className={getDifficultyColor(language.difficulty)}>
                  {language.difficulty}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Progress placeholder */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-muted-foreground">0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{language.totalLessons} lessons</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{language.estimatedTime}</span>
                </div>
              </div>

              {/* Action Button */}
              <Button asChild className="w-full group-hover:translate-x-1 transition-transform">
                <Link href={`/learn/${language.id}`}>
                  Start Learning
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Coming Soon */}
      {availableLanguages.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Lessons Coming Soon</h3>
          <p className="text-muted-foreground">
            We're working hard to bring you amazing programming lessons. 
            Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}