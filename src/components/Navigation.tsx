"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import posthog from "posthog-js";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 24,
        mass: 0.2,
    });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-smooth ${isScrolled ? "bg-white/88 backdrop-blur-md border-b border-border/70" : ""
                }`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-container mx-auto px-12">
                <div className={`flex items-center justify-between gap-6 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
                    <Link href="/" className="flex items-center gap-3">
                        <span className="font-serif text-xl font-medium tracking-[-0.02em]">Wrapshoot</span>
                    </Link>

                    <div className="flex gap-10 max-md:hidden">
                        <a href="#features" className="studio-nav-link text-sm font-medium">Features</a>
                        <a href="#pricing" className="studio-nav-link text-sm font-medium">Pricing</a>
                        <Link href="/learn" className="studio-nav-link text-sm font-medium">User Guide</Link>
                        <Link href="/community" className="studio-nav-link text-sm font-medium">Community</Link>
                    </div>

                    <a href="https://app.wrapshoot.com" className="btn btn-primary !px-5 !py-2.5 !text-sm" onClick={() => posthog.capture("cta_clicked", { location: "nav", label: "Get Started" })}>
                        Get Started
                    </a>
                </div>
            </div>
            <motion.div className="nav-scroll-progress" style={{ scaleX: progress }} />
        </motion.nav>
    );
}
