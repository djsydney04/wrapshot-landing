"use client";

import { useState } from "react";
import { Reply } from "lucide-react";
import { formatDate } from "@/lib/format-date";
import { useAuth } from "@/lib/auth-context";
import VoteButton from "./VoteButton";
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

interface CommentItemProps {
  comment: Comment;
  postId: string;
  userVoted: boolean;
  depth?: number;
  onReplyCreated?: () => void;
}

export default function CommentItem({ comment, postId, userVoted, depth = 0, onReplyCreated }: CommentItemProps) {
  const { user, setShowAuthModal } = useAuth();
  const [showReply, setShowReply] = useState(false);

  const handleReplyClick = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setShowReply(true);
  };

  return (
    <div className={depth > 0 ? "ml-8 border-l-2 border-border pl-4" : ""}>
      <div className="py-4">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-6 h-6 rounded-full bg-bg-alt text-text-muted flex items-center justify-center text-[10px] font-semibold">
            {(comment.profiles.display_name || comment.profiles.username).slice(0, 2).toUpperCase()}
          </div>
          <span className="text-sm font-medium">{comment.profiles.display_name || comment.profiles.username}</span>
          <span className="text-xs text-text-muted">{formatDate(comment.created_at)}</span>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-3 whitespace-pre-wrap">{comment.body}</p>

        <div className="flex items-center gap-3">
          <VoteButton targetType="comment" targetId={comment.id} initialCount={comment.vote_count} initialVoted={userVoted} />
          {depth === 0 && (
            <button
              onClick={handleReplyClick}
              className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-text transition-colors"
            >
              <Reply size={13} />
              Reply
            </button>
          )}
        </div>

        {showReply && (
          <div className="mt-3">
            <CommentForm
              postId={postId}
              parentId={comment.id}
              placeholder={`Reply to ${comment.profiles.display_name || comment.profiles.username}...`}
              onCreated={() => {
                setShowReply(false);
                onReplyCreated?.();
              }}
              onCancel={() => setShowReply(false)}
            />
          </div>
        )}
      </div>

      {comment.replies?.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          postId={postId}
          userVoted={false}
          depth={1}
          onReplyCreated={onReplyCreated}
        />
      ))}
    </div>
  );
}
