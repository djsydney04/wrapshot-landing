"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

interface Comment {
  id: string;
  body: string;
  vote_count: number;
  created_at: string;
  parent_id: string | null;
  profiles: { username: string; display_name: string | null };
  replies?: Comment[];
}

export default function CommentList({ postId }: { postId: string }) {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [userVotes, setUserVotes] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const fetchComments = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("comments")
      .select("*, profiles(username, display_name)")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (data) {
      // Build threaded structure (1 level)
      const topLevel: Comment[] = [];
      const replyMap: Record<string, Comment[]> = {};

      for (const c of data) {
        if (c.parent_id) {
          if (!replyMap[c.parent_id]) replyMap[c.parent_id] = [];
          replyMap[c.parent_id].push(c);
        } else {
          topLevel.push({ ...c, replies: [] });
        }
      }

      for (const top of topLevel) {
        top.replies = replyMap[top.id] || [];
      }

      setComments(topLevel);

      // Fetch user votes
      if (user) {
        const commentIds = data.map((c: { id: string }) => c.id);
        const { data: votes } = await supabase
          .from("votes")
          .select("comment_id")
          .eq("user_id", user.id)
          .in("comment_id", commentIds);
        if (votes) {
          setUserVotes(new Set(votes.map((v: { comment_id: string }) => v.comment_id)));
        }
      }
    }
    setLoading(false);
  }, [postId, user]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div>
      <div className="mb-6">
        <CommentForm postId={postId} onCreated={fetchComments} />
      </div>

      {loading && comments.length === 0 && (
        <p className="text-sm text-text-muted py-4">Loading comments...</p>
      )}

      {!loading && comments.length === 0 && (
        <p className="text-sm text-text-muted py-4">No comments yet. Be the first to reply.</p>
      )}

      <div className="divide-y divide-border">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            postId={postId}
            userVoted={userVotes.has(comment.id)}
            onReplyCreated={fetchComments}
          />
        ))}
      </div>
    </div>
  );
}
