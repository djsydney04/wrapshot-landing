import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — Wrapshot",
    description: "The terms and conditions governing your use of the Wrapshot platform.",
    openGraph: {
        title: "Terms of Service — Wrapshot",
        description: "The terms and conditions governing your use of the Wrapshot platform.",
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
