import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Learn Wrapshot — Your Complete Production Guide",
    description: "Learn how to manage your film production with Wrapshot. From uploading scripts to generating call sheets, our guide covers everything you need to know.",
    openGraph: {
        title: "Learn Wrapshot — Your Complete Production Guide",
        description: "Your complete guide to managing film productions with Wrapshot.",
    },
};

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
