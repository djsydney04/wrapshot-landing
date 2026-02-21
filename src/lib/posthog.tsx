"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const POSTHOG_KEY = "phc_uRO1e9lY1YFX2zF154aWbZcSZWFvpyDnmJ4hkVGYRXJ";
const POSTHOG_HOST = "https://us.i.posthog.com";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        posthog.init(POSTHOG_KEY, {
            api_host: POSTHOG_HOST,
            capture_pageview: false, // we capture manually for SPA routing
            capture_pageleave: true,
        });
    }, []);

    return (
        <PHProvider client={posthog}>
            <Suspense fallback={null}>
                <PostHogPageView />
            </Suspense>
            {children}
        </PHProvider>
    );
}

function PostHogPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            let url = window.origin + pathname;
            if (searchParams?.toString()) {
                url = url + "?" + searchParams.toString();
            }
            posthog.capture("$pageview", { $current_url: url });
        }
    }, [pathname, searchParams]);

    return null;
}
