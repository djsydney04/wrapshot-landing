"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-section border-t border-border">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="text-center max-w-[560px] mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-serif text-[40px] font-normal leading-[1.15] mb-4">
                        Ready to try it?
                    </h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Free for small productions. No credit card.
                    </p>
                    <a href="https://app.wrapshoot.com" className="btn btn-primary">
                        Get Started
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
