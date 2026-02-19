"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  post_count: number;
}

export default function CategoryCard({ category, index }: { category: Category; index: number }) {
  const IconComponent = (category.icon && (Icons as unknown as Record<string, LucideIcon>)[category.icon]) || Icons.MessageSquare;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/community/${category.slug}`}
        className="block bg-white border border-border rounded-xl p-6 hover:border-border/100 hover:shadow-sm transition-all group"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-bg-alt flex items-center justify-center shrink-0 group-hover:bg-text group-hover:text-white transition-colors">
            <IconComponent size={18} />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold mb-1 group-hover:text-text transition-colors">{category.name}</h3>
            {category.description && (
              <p className="text-xs text-text-muted leading-relaxed mb-2">{category.description}</p>
            )}
            <span className="text-xs text-text-muted">
              {category.post_count} {category.post_count === 1 ? "post" : "posts"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
