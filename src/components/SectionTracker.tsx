"use client";

import { useEffect, useRef } from "react";
import posthog from "posthog-js";

export default function SectionTracker({
    section,
    children,
}: {
    section: string;
    children: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const fired = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !fired.current) {
                    fired.current = true;
                    posthog.capture("section_viewed", { section });
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [section]);

    return <div ref={ref}>{children}</div>;
}
