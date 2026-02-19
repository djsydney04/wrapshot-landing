"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import UserMenu from "./UserMenu";

interface Breadcrumb {
  label: string;
  href?: string;
}

export default function CommunityHeader({ breadcrumbs = [] }: { breadcrumbs?: Breadcrumb[] }) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] bg-white/88 backdrop-blur-md border-b border-border/70"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-container mx-auto px-12">
        <div className="flex items-center justify-between gap-6 py-3">
          <div className="flex items-center gap-2 min-w-0">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <span className="font-serif text-xl font-medium tracking-[-0.02em]">Wrapshoot</span>
            </Link>
            <ChevronRight size={14} className="text-text-muted shrink-0" />
            <Link href="/community" className="text-sm font-medium text-text-secondary hover:text-text transition-colors shrink-0">
              Community
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2 min-w-0">
                <ChevronRight size={14} className="text-text-muted shrink-0" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-sm font-medium text-text-secondary hover:text-text transition-colors truncate">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-text truncate">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
          <UserMenu />
        </div>
      </div>
    </motion.header>
  );
}
