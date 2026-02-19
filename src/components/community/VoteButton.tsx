"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";

interface VoteButtonProps {
  targetType: "post" | "comment";
  targetId: string;
  initialCount: number;
  initialVoted: boolean;
}

export default function VoteButton({ targetType, targetId, initialCount, initialVoted }: VoteButtonProps) {
  const { user, setShowAuthModal } = useAuth();
  const [count, setCount] = useState(initialCount);
  const [voted, setVoted] = useState(initialVoted);
  const [busy, setBusy] = useState(false);

  const handleVote = async () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (busy) return;
    setBusy(true);

    if (voted) {
      // Optimistic
      setVoted(false);
      setCount((c) => c - 1);

      const col = targetType === "post" ? "post_id" : "comment_id";
      const { error } = await supabase
        .from("votes")
        .delete()
        .eq("user_id", user.id)
        .eq(col, targetId);

      if (error) {
        setVoted(true);
        setCount((c) => c + 1);
      }
    } else {
      setVoted(true);
      setCount((c) => c + 1);

      const payload: Record<string, string> = { user_id: user.id };
      if (targetType === "post") payload.post_id = targetId;
      else payload.comment_id = targetId;

      const { error } = await supabase.from("votes").insert(payload);

      if (error) {
        setVoted(false);
        setCount((c) => c - 1);
      }
    }

    setBusy(false);
  };

  return (
    <button
      onClick={handleVote}
      className={`flex items-center gap-1.5 text-xs font-medium rounded-lg px-2.5 py-1.5 transition-all ${
        voted
          ? "bg-text text-white"
          : "bg-bg-alt text-text-secondary hover:bg-border hover:text-text"
      }`}
    >
      <ArrowUp size={14} />
      {count}
    </button>
  );
}
