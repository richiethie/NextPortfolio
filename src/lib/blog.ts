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

  const allPosts: BlogPostSummary[] = [];

  fileNames.forEach((fileName) => {
    if (!fileName.endsWith('.md')) return;

    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    try {
      const matterResult = matter(fileContents);

      if (
        !matterResult.data.title ||
        !matterResult.data.date ||
        !matterResult.data.summary ||
        !matterResult.data.thumbnail
      ) {
        console.warn(`⚠️ Skipping ${fileName}: Missing required frontmatter`);
        return;
      }

      allPosts.push({
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        summary: matterResult.data.summary,
        thumbnail: matterResult.data.thumbnail,
      });
    } catch (err) {
      console.error(`❌ Error reading ${fileName}:`, err);
    }
  });

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

  let matterResult;
  try {
    matterResult = matter(fileContents);
  } catch (err) {
    throw new Error(`❌ Error parsing frontmatter in ${slug}.md: ${err}`);
  }

  let contentHtml = '';
  try {
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    contentHtml = processedContent.toString();
  } catch (err) {
    console.warn(`⚠️ Skipping HTML processing for ${slug}:`, err);
  }

  return {
    slug,
    title: matterResult.data.title || 'Untitled',
    date: matterResult.data.date || 'Unknown',
    summary: matterResult.data.summary || '',
    thumbnail: matterResult.data.thumbnail || '',
    contentHtml,
  };
}
