"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { formatDate } from "@/lib/format-date";
import VoteButton from "./VoteButton";

interface Post {
  id: string;
  title: string;
  body: string;
  slug: string;
  vote_count: number;
  comment_count: number;
  is_pinned: boolean;
  created_at: string;
  profiles: { username: string; display_name: string | null };
  categories: { name: string; slug: string };
}

export default function PostCard({
  post,
  index,
  userVoted,
  showCategory,
}: {
  post: Post;
  index: number;
  userVoted: boolean;
  showCategory?: boolean;
}) {
  const snippet = post.body.length > 160 ? post.body.slice(0, 160) + "..." : post.body;

  return (
    <motion.div
      className="bg-white border border-border rounded-xl p-5 hover:border-border/100 hover:shadow-sm transition-all"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
    >
      <div className="flex gap-4">
        <div className="shrink-0 pt-0.5">
          <VoteButton targetType="post" targetId={post.id} initialCount={post.vote_count} initialVoted={userVoted} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            {post.is_pinned && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                Pinned
              </span>
            )}
            {showCategory && (
              <Link
                href={`/community/${post.categories.slug}`}
                className="text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted bg-bg-alt px-1.5 py-0.5 rounded hover:text-text transition-colors"
              >
                {post.categories.name}
              </Link>
            )}
          </div>
          <Link href={`/community/post/${post.slug}`} className="block group">
            <h3 className="text-sm font-semibold mb-1 group-hover:text-text-secondary transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed mb-2">{snippet}</p>
          </Link>
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span>{post.profiles.display_name || post.profiles.username}</span>
            <span>&middot;</span>
            <span>{formatDate(post.created_at)}</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <MessageSquare size={12} />
              {post.comment_count}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
