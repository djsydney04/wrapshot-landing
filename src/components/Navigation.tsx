"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[100] py-6 transition-all duration-300 ease-smooth ${isScrolled ? "bg-bg/90 backdrop-blur-[20px] py-4" : ""
                }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center justify-between max-w-container mx-auto px-12">
                <a href="/" className="font-serif text-xl font-medium tracking-[-0.02em]">Wrapshot</a>

                <div className="flex gap-10 max-md:hidden">
                    <a href="#features" className="text-sm text-text-secondary hover:text-text transition-colors duration-200">Features</a>
                    <a href="#pricing" className="text-sm text-text-secondary hover:text-text transition-colors duration-200">Pricing</a>
                    <a href="/learn" className="text-sm text-text-secondary hover:text-text transition-colors duration-200">User Guide</a>
                </div>

                <a href="https://app.wrapshot.com" className="text-sm font-medium px-5 py-2.5 bg-text text-white rounded hover:opacity-85 transition-opacity duration-200">Get Started</a>
            </div>
        </motion.nav>
    );
}
