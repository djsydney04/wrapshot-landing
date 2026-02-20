"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getSupabase } from "@/lib/supabase";

function CallbackHandler() {
  const searchParams = useSearchParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const next = searchParams.get("next") || "/community";

    const timeout = setTimeout(() => {
      setError(true);
    }, 5000);

    const { data: { subscription } } = getSupabase().auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        clearTimeout(timeout);
        window.location.href = next;
      }
    });

    // Also check if already signed in (tokens may have been picked up on init)
    getSupabase().auth.getSession().then(({ data: { session } }) => {
      if (session) {
        clearTimeout(timeout);
        window.location.href = next;
      }
    });

    return () => {
      clearTimeout(timeout);
      subscription.unsubscribe();
    };
  }, [searchParams]);

  if (error) {
    return (
      <div className="text-center">
        <p className="text-sm text-red-600 mb-4">Something went wrong signing you in.</p>
        <a href="/community" className="btn btn-primary !px-6 !py-2.5 !text-sm">
          Back to Community
        </a>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-text/20 border-t-text rounded-full animate-spin mx-auto mb-4" />
      <p className="text-sm text-text-secondary">Signing you in...</p>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--studio-bg)]">
      <Suspense
        fallback={
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-text/20 border-t-text rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-text-secondary">Signing you in...</p>
          </div>
        }
      >
        <CallbackHandler />
      </Suspense>
    </div>
  );
}
