"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";
import CommunityHeader from "@/components/community/CommunityHeader";
import CategoryCard from "@/components/community/CategoryCard";
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

export default function CommunityPage() {
  const { user, setShowAuthModal } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    getSupabase()
      .from("categories")
      .select("*")
      .order("sort_order")
      .then(({ data }) => {
        if (data) setCategories(data);
      });
  }, []);

  const handleNewPost = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setShowPostForm(true);
  };

  return (
    <div className="min-h-screen bg-[var(--studio-bg)]">
      <CommunityHeader />

      <main className="pt-[80px] pb-20">
        <div className="max-w-container mx-auto px-12">
          {/* Hero */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-3 font-medium">Community</p>
            <h1 className="font-serif text-4xl font-medium tracking-[-0.02em] mb-3">
              Film Production Forum
            </h1>
            <p className="text-text-secondary max-w-lg">
              Ask questions, share knowledge, and connect with fellow filmmakers and production professionals.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs uppercase tracking-[0.1em] text-text-muted font-semibold">Categories</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map((cat, i) => (
                <CategoryCard key={cat.id} category={cat} index={i} />
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs uppercase tracking-[0.1em] text-text-muted font-semibold">Recent Discussions</h2>
              <button onClick={handleNewPost} className="btn btn-primary !px-4 !py-2.5 !text-sm">
                <Plus size={15} />
                New Post
              </button>
            </div>
            <PostList key={refreshKey} />
          </div>
        </div>
      </main>

      <PostForm
        open={showPostForm}
        onClose={() => setShowPostForm(false)}
        onCreated={() => setRefreshKey((k) => k + 1)}
      />
    </div>
  );
}
