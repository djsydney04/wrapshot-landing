"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

export default function CommunityAuthGate({ children }: { children: React.ReactNode }) {
  const { user, loading, redirectToLogin } = useAuth();
  const pathname = usePathname();

  // Always allow the callback page through (it handles the auth redirect)
  if (pathname.startsWith("/community/auth/")) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--studio-bg)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-text/20 border-t-text rounded-full animate-spin" />
      </div>
    );
  }

  if (user) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[var(--studio-bg)]">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/88 backdrop-blur-md border-b border-border/70">
        <div className="max-w-container mx-auto px-12">
          <div className="flex items-center gap-6 py-3">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <span className="font-serif text-xl font-medium tracking-[-0.02em]">Wrapshoot</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Gate content */}
      <div className="pt-[80px] flex items-center justify-center min-h-screen">
        <motion.div
          className="max-w-md w-full mx-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-text text-white flex items-center justify-center mx-auto mb-6">
            <MessageSquare size={24} />
          </div>

          <h1 className="font-serif text-3xl font-medium tracking-[-0.02em] mb-3">
            Join the Community
          </h1>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Sign in or create an account to access discussions, ask questions, and connect with fellow filmmakers.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => redirectToLogin(undefined, "signin")}
              className="btn btn-primary w-full !py-3 flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => redirectToLogin(undefined, "signup")}
              className="btn btn-outline w-full !py-3"
            >
              Create Account
            </button>
          </div>

          <p className="text-xs text-text-muted mt-6">
            You&apos;ll be redirected to Wrapshoot to sign in, then brought right back.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
