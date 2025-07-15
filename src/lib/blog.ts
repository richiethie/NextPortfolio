import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
};

export type BlogPost = BlogPostSummary & {
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), 'src/content');

/**
 * Get all blog post summaries (no content).
 */
export function getAllPosts(): BlogPostSummary[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        summary: matterResult.data.summary,
        thumbnail: matterResult.data.thumbnail,
      };
    });

  // Sort posts by date descending
  return allPosts.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
}

/**
 * Get full blog post by slug (including converted HTML content).
 */
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    summary: matterResult.data.summary,
    thumbnail: matterResult.data.thumbnail,
    contentHtml,
  };
}
