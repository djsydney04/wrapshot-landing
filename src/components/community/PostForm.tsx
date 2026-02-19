"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";
import { generateSlug } from "@/lib/generate-slug";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface PostFormProps {
  open: boolean;
  onClose: () => void;
  defaultCategoryId?: string;
  onCreated?: () => void;
}

export default function PostForm({ open, onClose, defaultCategoryId, onCreated }: PostFormProps) {
  const { user, setShowAuthModal } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState(defaultCategoryId || "");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getSupabase()
      .from("categories")
      .select("id, name, slug")
      .order("sort_order")
      .then(({ data }) => {
        if (data) setCategories(data);
      });
  }, []);

  useEffect(() => {
    if (defaultCategoryId) setCategoryId(defaultCategoryId);
  }, [defaultCategoryId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    setError(null);
    setSubmitting(true);

    const slug = generateSlug(title);

    const { error: insertError } = await getSupabase().from("posts").insert({
      author_id: user.id,
      category_id: categoryId,
      title,
      body,
      slug,
    });

    setSubmitting(false);

    if (insertError) {
      setError(insertError.message);
    } else {
      setTitle("");
      setBody("");
      onClose();
      onCreated?.();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative bg-white rounded-xl border border-border shadow-lg w-full max-w-lg mx-4 p-8"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors"
            >
              <X size={18} />
            </button>

            <h2 className="font-serif text-2xl font-medium mb-1">New Post</h2>
            <p className="text-sm text-text-secondary mb-6">Start a new discussion in the community.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-[0.05em]">
                  Category
                </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-text/10 focus:border-text/30 transition-all"
                >
                  <option value="">Select a category</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-[0.05em]">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  maxLength={200}
                  className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-text/10 focus:border-text/30 transition-all"
                  placeholder="What's on your mind?"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-[0.05em]">
                  Body
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-text/10 focus:border-text/30 transition-all resize-y"
                  placeholder="Share your thoughts, ask a question, or start a discussion..."
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
              )}

              <button type="submit" disabled={submitting} className="btn btn-primary w-full !py-3">
                {submitting ? "Posting..." : "Publish Post"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
