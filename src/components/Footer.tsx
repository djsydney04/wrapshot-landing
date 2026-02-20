"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border/70">
            <div className="max-w-container mx-auto px-12">
                <div className="pb-10 flex justify-between items-start mb-10 border-b border-border/70 max-md:flex-col max-md:gap-8">
                    <Link href="/" className="font-serif text-xl font-medium">
                        Wrapshoot
                    </Link>

                    <div className="flex gap-8 max-md:flex-wrap">
                        <a href="#features" className="studio-nav-link text-sm">Features</a>
                        <a href="#pricing" className="studio-nav-link text-sm">Pricing</a>
                        <Link href="/learn" className="studio-nav-link text-sm">User Guide</Link>
                        <Link href="/community" className="studio-nav-link text-sm">Community</Link>
                        <a href="#faq" className="studio-nav-link text-sm">FAQ</a>
                        <a href="mailto:hello@wrapshoot.com" className="studio-nav-link text-sm">Contact</a>
                        <Link href="/jobs" className="studio-nav-link text-sm">Jobs</Link>
                    </div>
                </div>

                <div className="pt-6 border-t border-border flex justify-between items-center max-md:flex-col max-md:gap-4">
                    <span className="text-sm text-text-muted">&copy; {new Date().getFullYear()} Wrapshoot. All rights reserved.</span>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="studio-nav-link text-sm text-text-muted">Privacy</Link>
                        <Link href="/terms" className="studio-nav-link text-sm text-text-muted">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
