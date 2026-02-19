"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";
import CommunityHeader from "@/components/community/CommunityHeader";
import PostDetail from "@/components/community/PostDetail";
import CommentList from "@/components/community/CommentList";

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { user } = useAuth();
  const [post, setPost] = useState<any>(null);
  const [userVoted, setUserVoted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await getSupabase()
        .from("posts")
        .select("*, profiles(username, display_name), categories(name, slug)")
        .eq("slug", slug)
        .single();

      if (data) {
        setPost(data);

        if (user) {
          const { data: vote } = await getSupabase()
            .from("votes")
            .select("id")
            .eq("user_id", user.id)
            .eq("post_id", data.id)
            .maybeSingle();
          setUserVoted(!!vote);
        }
      }
      setLoading(false);
    }

    fetchPost();
  }, [slug, user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--studio-bg)]">
        <CommunityHeader />
        <div className="pt-[80px] pb-20 max-w-container mx-auto px-12">
          <p className="text-sm text-text-muted py-12">Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--studio-bg)]">
        <CommunityHeader />
        <div className="pt-[80px] pb-20 max-w-container mx-auto px-12">
          <p className="text-sm text-text-muted py-12">Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--studio-bg)]">
      <CommunityHeader
        breadcrumbs={[
          { label: post.categories.name, href: `/community/${post.categories.slug}` },
          { label: post.title },
        ]}
      />

      <main className="pt-[80px] pb-20">
        <div className="max-w-container mx-auto px-12">
          <div className="max-w-3xl">
            <PostDetail post={post} userVoted={userVoted} />

            <div className="mt-8">
              <h2 className="text-xs uppercase tracking-[0.1em] text-text-muted font-semibold mb-5">
                Comments
              </h2>
              <CommentList postId={post.id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
