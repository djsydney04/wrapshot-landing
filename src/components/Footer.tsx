"use client";

import { Twitter, Linkedin, Youtube } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = {
    Product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Changelog", href: "/changelog" },
        { label: "Status", href: "/status" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Press Kit", href: "/press" },
    ],
    Resources: [
        { label: "Help Center", href: "/help" },
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Community", href: "/community" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
    ],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <a href="/" className={styles.logo}>
                            <svg className={styles.logoIcon} viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="8" fill="url(#gradientFooter)" />
                                <path
                                    d="M9 16.5L13.5 21L23 11"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <defs>
                                    <linearGradient id="gradientFooter" x1="0" y1="0" x2="32" y2="32">
                                        <stop stopColor="#6366F1" />
                                        <stop offset="1" stopColor="#818CF8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={styles.logoText}>Wrapshoot</span>
                        </a>
                        <p className={styles.tagline}>Production scheduling that just works.</p>
                    </div>

                    <div className={styles.links}>
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className={styles.linkGroup}>
                                <h4 className={styles.linkGroupTitle}>{category}</h4>
                                <ul className={styles.linkList}>
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <a href={link.href} className={styles.link}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Wrapshoot, Inc. All rights reserved.
                    </p>
                    <div className={styles.socials}>
                        <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://youtube.com" className={styles.socialLink} aria-label="YouTube">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
