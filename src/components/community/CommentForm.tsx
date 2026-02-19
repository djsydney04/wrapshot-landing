"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";

interface CommentFormProps {
  postId: string;
  parentId?: string;
  onCreated?: () => void;
  onCancel?: () => void;
  placeholder?: string;
}

export default function CommentForm({ postId, parentId, onCreated, onCancel, placeholder }: CommentFormProps) {
  const { user, setShowAuthModal } = useAuth();
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (!body.trim()) return;

    setError(null);
    setSubmitting(true);

    const payload: Record<string, string> = {
      post_id: postId,
      author_id: user.id,
      body: body.trim(),
    };
    if (parentId) payload.parent_id = parentId;

    const { error: insertError } = await getSupabase().from("comments").insert(payload);

    setSubmitting(false);

    if (insertError) {
      setError(insertError.message);
    } else {
      setBody("");
      onCreated?.();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={parentId ? 2 : 3}
        required
        className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-text/10 focus:border-text/30 transition-all resize-y"
        placeholder={placeholder || "Write a comment..."}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex items-center gap-2">
        <button type="submit" disabled={submitting} className="btn btn-primary !px-4 !py-2 !text-sm">
          {submitting ? "Posting..." : parentId ? "Reply" : "Comment"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn btn-outline !px-4 !py-2 !text-sm">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
