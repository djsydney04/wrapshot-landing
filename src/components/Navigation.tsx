"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navigation.module.css";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#faq", label: "FAQ" },
    ];

    return (
        <motion.nav
            className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <svg className={styles.logoIcon} viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="url(#gradient)" />
                        <path
                            d="M9 16.5L13.5 21L23 11"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                                <stop stopColor="#6366F1" />
                                <stop offset="1" stopColor="#818CF8" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className={styles.logoText}>Wrapshoot</span>
                </a>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className={styles.navActions}>
                    <a href="/login" className={styles.loginLink}>
                        Log in
                    </a>
                    <a href="/signup" className="btn btn-primary">
                        Get Started
                    </a>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className={styles.mobileMenu}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className={styles.mobileActions}>
                        <a href="/login" className={styles.mobileLoginLink}>
                            Log in
                        </a>
                        <a href="/signup" className="btn btn-primary" style={{ width: "100%" }}>
                            Get Started
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
