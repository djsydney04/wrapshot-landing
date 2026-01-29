"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    return (
        <section className="py-16">
            <motion.div
                className="max-w-container mx-auto px-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-xs uppercase tracking-wider text-text-muted mb-6">Trusted by productions at</p>
                <div className="flex justify-center gap-12 flex-wrap">
                    <span className="text-lg font-medium text-text-muted">A24</span>
                    <span className="text-lg font-medium text-text-muted">Searchlight</span>
                    <span className="text-lg font-medium text-text-muted">Focus Features</span>
                    <span className="text-lg font-medium text-text-muted">Blumhouse</span>
                    <span className="text-lg font-medium text-text-muted">NEON</span>
                </div>
            </motion.div>
        </section>
    );
}
