"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal, signIn, signUp } = useAuth();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const result =
      tab === "signin"
        ? await signIn(email, password)
        : await signUp(email, password, username);

    setSubmitting(false);

    if (result.error) {
      setError(result.error);
    } else {
      reset();
      setShowAuthModal(false);
    }
  };

  return (
    <AnimatePresence>
      {showAuthModal && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowAuthModal(false)}
          />
          <motion.div
            className="relative bg-white rounded-xl border border-border shadow-lg w-full max-w-md mx-4 p-8"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors"
            >
              <X size={18} />
            </button>

            <h2 className="font-serif text-2xl font-medium mb-1">
              {tab === "signin" ? "Welcome back" : "Create account"}
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              {tab === "signin"
                ? "Sign in to participate in the community."
                : "Join the conversation."}
            </p>

            <div className="flex gap-1 mb-6 bg-bg-alt rounded-lg p-1">
              <button
                onClick={() => { setTab("signin"); setError(null); }}
                className={`flex-1 text-sm font-medium py-2 rounded-md transition-all ${
                  tab === "signin"
                    ? "bg-white shadow-sm text-text"
                    : "text-text-muted hover:text-text"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab("signup"); setError(null); }}
                className={`flex-1 text-sm font-medium py-2 rounded-md transition-all ${
                  tab === "signup"
                    ? "bg-white shadow-sm text-text"
                    : "text-text-muted hover:text-text"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === "signup" && (
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-[0.05em]">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-text/10 focus:border-text/30 transition-all"
                    placeholder="your_username"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-[0.05em]">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-text/10 focus:border-text/30 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-[0.05em]">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-text/10 focus:border-text/30 transition-all"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-full !py-3"
              >
                {submitting
                  ? "Loading..."
                  : tab === "signin"
                    ? "Sign In"
                    : "Create Account"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
