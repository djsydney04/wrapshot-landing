"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Navigation.module.css";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.inner}>
                <a href="/" className={styles.logo}>Wrapshoot</a>

                <div className={styles.links}>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                </div>

                <a href="https://app.wrapshoot.com" className={styles.cta}>Get Started</a>
            </div>
        </motion.nav>
    );
}
