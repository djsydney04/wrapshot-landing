"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";
import CommunityHeader from "@/components/community/CommunityHeader";
import PostList from "@/components/community/PostList";
import PostForm from "@/components/community/PostForm";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  post_count: number;
}

export default function CategoryPage() {
  const params = useParams();
  const slug = params.category as string;
  const { user, setShowAuthModal } = useAuth();
  const [category, setCategory] = useState<Category | null>(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    getSupabase()
      .from("categories")
      .select("*")
      .eq("slug", slug)
      .single()
      .then(({ data }) => {
        if (data) setCategory(data);
      });
  }, [slug]);

  const handleNewPost = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setShowPostForm(true);
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-[var(--studio-bg)]">
        <CommunityHeader />
        <div className="pt-[80px] pb-20 max-w-container mx-auto px-12">
          <p className="text-sm text-text-muted py-12">Loading...</p>
        </div>
      </div>
    );
  }

  const IconComponent = (category.icon && (Icons as Record<string, unknown>)[category.icon] as LucideIcon) || Icons.MessageSquare;

  return (
    <div className="min-h-screen bg-[var(--studio-bg)]">
      <CommunityHeader breadcrumbs={[{ label: category.name }]} />

      <main className="pt-[80px] pb-20">
        <div className="max-w-container mx-auto px-12">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-11 h-11 rounded-lg bg-text text-white flex items-center justify-center">
                <IconComponent size={20} />
              </div>
              <div>
                <h1 className="font-serif text-3xl font-medium tracking-[-0.02em]">{category.name}</h1>
                {category.description && (
                  <p className="text-sm text-text-secondary mt-0.5">{category.description}</p>
                )}
              </div>
            </div>
            <p className="text-xs text-text-muted">
              {category.post_count} {category.post_count === 1 ? "post" : "posts"}
            </p>
          </motion.div>

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs uppercase tracking-[0.1em] text-text-muted font-semibold">Posts</h2>
            <button onClick={handleNewPost} className="btn btn-primary !px-4 !py-2.5 !text-sm">
              <Plus size={15} />
              New Post
            </button>
          </div>

          <PostList key={refreshKey} categoryId={category.id} />
        </div>
      </main>

      <PostForm
        open={showPostForm}
        onClose={() => setShowPostForm(false)}
        defaultCategoryId={category.id}
        onCreated={() => setRefreshKey((k) => k + 1)}
      />
    </div>
  );
}
