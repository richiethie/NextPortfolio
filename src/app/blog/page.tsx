import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getAllPosts();

  const [latestPost, secondPost, thirdPost, ...otherPosts] = posts;

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 sm:px-12 py-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-start">
          My Blog <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Dump</span>
        </h1>

        {/* TOP FEATURED GRID */}
        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {/* Latest post (big, spans 2 cols + 2 rows) */}
          {latestPost && (
            <Link
              href={`/blog/${latestPost.slug}`}
              className="sm:col-span-2 sm:row-span-2 group"
            >
              <div className="relative w-full h-48 md:h-[80%] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={latestPost.thumbnail}
                  alt={latestPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl md:text-3xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {latestPost.title}
              </h2>
              <p className="text-zinc-400 mb-2 line-clamp-2">
                {latestPost.summary}
              </p>
              <div className="text-sm text-zinc-500">
                <Calendar className="w-4 h-4 inline-block mr-1" />
                {new Date(latestPost.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </Link>
          )}

          {/* Right column stack: second + third posts */}
          <div className="flex flex-col gap-6">
            {[secondPost, thirdPost].map(
              (post) =>
                post && (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <div className="relative w-full h-48 sm:h-48 mb-2 overflow-hidden rounded-lg">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>
                    <div className="text-sm text-zinc-500 mb-1">
                      <Calendar className="w-4 h-4 inline-block mr-1" />
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>

        {/* REST OF POSTS */}
        {otherPosts.length > 0 && (
          <div className="clear-both md:mt-auto border-t border-zinc-800 pt-12">
            <h2 className="text-2xl font-bold mb-8 text-zinc-300">More Posts</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border-b border-zinc-800 pb-6"
                >
                  <div className="relative w-full h-48 sm:h-60 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-sm text-zinc-500 mb-2">
                    <Calendar className="w-4 h-4 inline-block mr-1" />
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <p className="text-zinc-400 line-clamp-3">{post.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}