import type { Metadata } from "next";
import { AuthProvider } from "@/lib/auth-context";
import CommunityAuthGate from "@/components/community/CommunityAuthGate";

export const metadata: Metadata = {
  title: "Community — Wrapshoot",
  description:
    "Join the Wrapshoot community to discuss film production, share tips, and connect with other filmmakers.",
  openGraph: {
    title: "Community — Wrapshoot",
    description: "Join the Wrapshoot community to discuss film production.",
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CommunityAuthGate>
        {children}
      </CommunityAuthGate>
    </AuthProvider>
  );
}
