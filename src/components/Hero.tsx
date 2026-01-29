"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-auto flex items-center pt-[140px] pb-[100px] overflow-hidden relative bg-[#FAFAFA]">
            <div className="max-w-container mx-auto px-12 relative w-full">
                <motion.div
                    className="max-w-[640px] text-center mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <h1 className="font-serif text-[60px] font-normal leading-[1.1] tracking-[-0.025em] mb-6 text-text">
                        Schedule smarter.
                        <br />
                        <em className="italic">Wrap on time.</em>
                    </h1>
                    <p className="text-[19px] leading-[1.6] text-text-secondary mb-10 max-w-[480px] mx-auto">
                        End-to-end software built for film and TV production.
                        Organize your crew, schedule your shoots, and wrap on time.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <a href="https://app.wrapshoot.com" className="btn btn-primary">
                            Start for free
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
