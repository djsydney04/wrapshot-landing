import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — Wrapshoot",
    description: "The terms and conditions governing your use of the Wrapshoot platform.",
    openGraph: {
        title: "Terms of Service — Wrapshoot",
        description: "The terms and conditions governing your use of the Wrapshoot platform.",
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
