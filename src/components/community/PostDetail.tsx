"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import VoteButton from "./VoteButton";

interface PostDetailProps {
  post: {
    id: string;
    title: string;
    body: string;
    vote_count: number;
    comment_count: number;
    is_pinned: boolean;
    created_at: string;
    profiles: { username: string; display_name: string | null };
    categories: { name: string; slug: string };
  };
  userVoted: boolean;
}

export default function PostDetail({ post, userVoted }: PostDetailProps) {
  return (
    <motion.article
      className="bg-white border border-border rounded-xl p-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {post.is_pinned && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
            Pinned
          </span>
        )}
        <Link
          href={`/community/${post.categories.slug}`}
          className="text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted bg-bg-alt px-1.5 py-0.5 rounded hover:text-text transition-colors"
        >
          {post.categories.name}
        </Link>
      </div>

      <h1 className="font-serif text-3xl font-medium leading-tight mb-4 tracking-[-0.01em]">
        {post.title}
      </h1>

      <div className="flex items-center gap-3 text-sm text-text-muted mb-6 pb-6 border-b border-border">
        <div className="w-7 h-7 rounded-full bg-text text-white flex items-center justify-center text-xs font-semibold">
          {(post.profiles.display_name || post.profiles.username).slice(0, 2).toUpperCase()}
        </div>
        <span className="font-medium text-text">{post.profiles.display_name || post.profiles.username}</span>
        <span>&middot;</span>
        <span>{formatDate(post.created_at)}</span>
      </div>

      <div className="text-[15px] leading-[1.75] text-text-secondary whitespace-pre-wrap mb-6">
        {post.body}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <VoteButton targetType="post" targetId={post.id} initialCount={post.vote_count} initialVoted={userVoted} />
        <span className="text-xs text-text-muted">
          {post.comment_count} {post.comment_count === 1 ? "comment" : "comments"}
        </span>
      </div>
    </motion.article>
  );
}
