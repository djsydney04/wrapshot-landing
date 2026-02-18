import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — Wrapshot",
    description: "Learn how Wrapshot collects, uses, and protects your personal information.",
    openGraph: {
        title: "Privacy Policy — Wrapshot",
        description: "Learn how Wrapshot collects, uses, and protects your personal information.",
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
