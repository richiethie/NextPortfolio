import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import { Calendar, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 sm:px-12 py-28">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="flex items-center text-zinc-400 hover:text-emerald-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        {/* Thumbnail at top */}
        <div className="w-full h-40 md:h-120 relative mb-6">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>

        {/* Date */}
        <div className="flex items-center text-zinc-500 text-sm mb-8">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {/* Summary */}
        <p className="text-lg text-zinc-400 mb-12">{post.summary}</p>

        {/* Markdown content */}
        <article
          className="blog-content text-zinc-300"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </div>
  );
}