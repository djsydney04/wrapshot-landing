"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { getSupabase } from "./supabase";
import type { User, Session } from "@supabase/supabase-js";

interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  redirectToLogin: (returnPath?: string, mode?: "signin" | "signup") => void;
  signOut: () => Promise<void>;
}

const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || "https://app.wrapshoot.com";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async (userId: string) => {
    const { data } = await getSupabase()
      .from("profiles")
      .select("id, username, display_name, avatar_url")
      .eq("id", userId)
      .single();
    setProfile(data);
  }, []);

  useEffect(() => {
    getSupabase().auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      if (s?.user) fetchProfile(s.user.id);
      setLoading(false);
    });

    const { data: { subscription } } = getSupabase().auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      if (s?.user) {
        fetchProfile(s.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchProfile]);

  const redirectToLogin = (returnPath?: string, mode?: "signin" | "signup") => {
    const currentPath = returnPath || window.location.pathname;
    const callbackUrl = `${window.location.origin}/community/auth/callback?next=${encodeURIComponent(currentPath)}`;
    const modeParam = mode ? `&mode=${mode}` : "";
    window.location.href = `${AUTH_APP_URL}/auth/community?return_to=${encodeURIComponent(callbackUrl)}${modeParam}`;
  };

  const signOut = async () => {
    await getSupabase().auth.signOut();
    setProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, session, profile, loading, redirectToLogin, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
