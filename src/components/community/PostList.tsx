"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";
import PostCard from "./PostCard";

type SortOption = "newest" | "top" | "oldest";
const PAGE_SIZE = 15;

interface PostListProps {
  categoryId?: string;
}

export default function PostList({ categoryId }: PostListProps) {
  const { user } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [userVotes, setUserVotes] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortOption>("newest");
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(0);

  const fetchPosts = useCallback(
    async (pageNum: number, append = false) => {
      setLoading(true);
      let query = supabase
        .from("posts")
        .select("*, profiles(username, display_name), categories(name, slug)");

      if (categoryId) query = query.eq("category_id", categoryId);

      if (sort === "newest") query = query.order("is_pinned", { ascending: false }).order("created_at", { ascending: false });
      else if (sort === "oldest") query = query.order("created_at", { ascending: true });
      else query = query.order("is_pinned", { ascending: false }).order("vote_count", { ascending: false });

      query = query.range(pageNum * PAGE_SIZE, (pageNum + 1) * PAGE_SIZE - 1);

      const { data } = await query;
      if (data) {
        setPosts((prev) => (append ? [...prev, ...data] : data));
        setHasMore(data.length === PAGE_SIZE);
      }
      setLoading(false);
    },
    [categoryId, sort]
  );

  // Fetch user votes for displayed posts
  const fetchUserVotes = useCallback(
    async (postIds: string[]) => {
      if (!user || postIds.length === 0) return;
      const { data } = await supabase
        .from("votes")
        .select("post_id")
        .eq("user_id", user.id)
        .in("post_id", postIds);
      if (data) {
        setUserVotes(new Set(data.map((v: { post_id: string }) => v.post_id)));
      }
    },
    [user]
  );

  useEffect(() => {
    setPage(0);
    fetchPosts(0);
  }, [fetchPosts]);

  useEffect(() => {
    if (posts.length > 0) {
      fetchUserVotes(posts.map((p) => p.id));
    }
  }, [posts, fetchUserVotes]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, true);
  };

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Newest" },
    { value: "top", label: "Top" },
    { value: "oldest", label: "Oldest" },
  ];

  return (
    <div>
      <div className="flex items-center gap-1 mb-4 bg-bg-alt rounded-lg p-1 w-fit">
        {sortOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setSort(opt.value)}
            className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all ${
              sort === opt.value
                ? "bg-white shadow-sm text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {posts.map((post, i) => (
          <PostCard
            key={post.id}
            post={post}
            index={i}
            userVoted={userVotes.has(post.id)}
            showCategory={!categoryId}
          />
        ))}
      </div>

      {loading && posts.length === 0 && (
        <div className="py-12 text-center text-sm text-text-muted">Loading posts...</div>
      )}

      {!loading && posts.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-text-muted">No posts yet. Be the first to start a discussion.</p>
        </div>
      )}

      {hasMore && !loading && (
        <div className="mt-6 text-center">
          <button onClick={loadMore} className="btn btn-outline !px-6 !py-2.5 !text-sm">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
