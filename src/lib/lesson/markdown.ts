import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type LessonMetadata = {
  title: string;
  description: string;
  order: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  language: string;
  group: string;
  startingCode?: string;
  expectedOutput?: string;
};

export type GroupMetadata = {
  title: string;
  description: string;
  order: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
};

export type ParsedLesson = {
  metadata: LessonMetadata;
  content: string;
  slug: string;
};

export type ParsedGroup = {
  metadata: GroupMetadata;
  content: string;
  slug: string;
  lessons: ParsedLesson[];
};

export type LanguageStructure = {
  language: string;
  groups: ParsedGroup[];
};

const CONTENT_DIR = path.join(process.cwd(), "content");

// Initialize remark processor
const processor = remark()
  .use(remarkGfm)
  .use(remarkHtml, { sanitize: false });

/**
 * Parse markdown content and extract metadata
 */
export async function parseMarkdown(content: string): Promise<{
  metadata: any;
  htmlContent: string;
}> {
  const { data: metadata, content: markdownContent } = matter(content);
  const htmlContent = await processor.process(markdownContent);
  
  return {
    metadata,
    htmlContent: String(htmlContent),
  };
}

/**
 * Get all available languages from the content directory
 */
export function getAvailableLanguages(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();
}

/**
 * Get all groups for a specific language
 */
export function getLanguageGroups(language: string): string[] {
  const languageDir = path.join(CONTENT_DIR, language);
  
  if (!fs.existsSync(languageDir)) {
    return [];
  }
  
  return fs
    .readdirSync(languageDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();
}

/**
 * Get all lessons in a specific group
 */
export function getGroupLessons(language: string, group: string): string[] {
  const groupDir = path.join(CONTENT_DIR, language, group);
  
  if (!fs.existsSync(groupDir)) {
    return [];
  }
  
  return fs
    .readdirSync(groupDir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => file.replace(".md", ""))
    .sort();
}

/**
 * Read and parse a group metadata file
 */
export async function getGroupMetadata(
  language: string,
  group: string
): Promise<ParsedGroup | null> {
  const groupFile = path.join(CONTENT_DIR, language, group, "_group.md");
  
  if (!fs.existsSync(groupFile)) {
    return null;
  }
  
  try {
    const fileContent = fs.readFileSync(groupFile, "utf8");
    const { metadata, htmlContent } = await parseMarkdown(fileContent);
    
    // Get all lessons in this group
    const lessonSlugs = getGroupLessons(language, group);
    const lessons: ParsedLesson[] = [];
    
    for (const lessonSlug of lessonSlugs) {
      const lesson = await getLessonData(language, group, lessonSlug);
      if (lesson) {
        lessons.push(lesson);
      }
    }
    
    // Sort lessons by order
    lessons.sort((a, b) => a.metadata.order - b.metadata.order);
    
    return {
      metadata: metadata as GroupMetadata,
      content: htmlContent,
      slug: group,
      lessons,
    };
  } catch (error) {
    console.error(`Error reading group metadata for ${language}/${group}:`, error);
    return null;
  }
}

/**
 * Read and parse a lesson file
 */
export async function getLessonData(
  language: string,
  group: string,
  lesson: string
): Promise<ParsedLesson | null> {
  const lessonFile = path.join(CONTENT_DIR, language, group, `${lesson}.md`);
  
  if (!fs.existsSync(lessonFile)) {
    return null;
  }
  
  try {
    const fileContent = fs.readFileSync(lessonFile, "utf8");
    const { metadata, htmlContent } = await parseMarkdown(fileContent);
    
    return {
      metadata: {
        ...metadata,
        language,
        group,
      } as LessonMetadata,
      content: htmlContent,
      slug: lesson,
    };
  } catch (error) {
    console.error(`Error reading lesson ${language}/${group}/${lesson}:`, error);
    return null;
  }
}

/**
 * Get complete language structure with all groups and lessons
 */
export async function getLanguageStructure(
  language: string
): Promise<LanguageStructure | null> {
  const groups = getLanguageGroups(language);
  
  if (groups.length === 0) {
    return null;
  }
  
  const parsedGroups: ParsedGroup[] = [];
  
  for (const groupSlug of groups) {
    const group = await getGroupMetadata(language, groupSlug);
    if (group) {
      parsedGroups.push(group);
    }
  }
  
  // Sort groups by order
  parsedGroups.sort((a, b) => a.metadata.order - b.metadata.order);
  
  return {
    language,
    groups: parsedGroups,
  };
}

/**
 * Get navigation data for lesson viewer
 */
export async function getLessonNavigation(
  language: string,
  group: string,
  lesson: string
): Promise<{
  prev: { language: string; group: string; lesson: string } | null;
  next: { language: string; group: string; lesson: string } | null;
}> {
  const groupData = await getGroupMetadata(language, group);
  
  if (!groupData) {
    return { prev: null, next: null };
  }
  
  const currentIndex = groupData.lessons.findIndex((l) => l.slug === lesson);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  const prev = currentIndex > 0 
    ? {
        language,
        group,
        lesson: groupData.lessons[currentIndex - 1]!.slug,
      }
    : null;
    
  const next = currentIndex < groupData.lessons.length - 1
    ? {
        language,
        group,
        lesson: groupData.lessons[currentIndex + 1]!.slug,
      }
    : null;
    
  return { prev, next };
}

/**
 * Search lessons by title or content
 */
export async function searchLessons(
  query: string,
  language?: string
): Promise<ParsedLesson[]> {
  const languages = language ? [language] : getAvailableLanguages();
  const results: ParsedLesson[] = [];
  
  for (const lang of languages) {
    const structure = await getLanguageStructure(lang);
    if (!structure) continue;
    
    for (const group of structure.groups) {
      for (const lesson of group.lessons) {
        const searchableText = `${lesson.metadata.title} ${lesson.metadata.description} ${lesson.content}`;
        if (searchableText.toLowerCase().includes(query.toLowerCase())) {
          results.push(lesson);
        }
      }
    }
  }
  
  return results;
}