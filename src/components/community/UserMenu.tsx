"use client";

import { useState, useRef, useEffect } from "react";
import { LogOut, User } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function UserMenu() {
  const { user, profile, loading, setShowAuthModal, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) {
    return <div className="w-8 h-8 rounded-full bg-bg-alt animate-pulse" />;
  }

  if (!user) {
    return (
      <button
        onClick={() => setShowAuthModal(true)}
        className="btn btn-outline !px-4 !py-2 !text-sm"
      >
        Sign In
      </button>
    );
  }

  const displayName = profile?.display_name || profile?.username || "User";
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
      >
        <div className="w-8 h-8 rounded-full bg-text text-white flex items-center justify-center text-xs font-semibold">
          {initials}
        </div>
        <span className="text-sm font-medium max-sm:hidden">{displayName}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-border shadow-lg py-1.5 z-50">
          <div className="px-3.5 py-2 border-b border-border">
            <p className="text-sm font-medium truncate">{displayName}</p>
            <p className="text-xs text-text-muted truncate">{user.email}</p>
          </div>
          <button
            onClick={() => { signOut(); setOpen(false); }}
            className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-text-secondary hover:bg-bg-alt transition-colors"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
