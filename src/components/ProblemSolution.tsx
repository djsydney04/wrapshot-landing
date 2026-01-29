"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
    return (
        <section className="py-section">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xl leading-relaxed text-text-secondary">
                        Production scheduling is still stuck in spreadsheets and legacy software.
                        Wrapshoot brings your stripboard, call sheets, and team into one place—so
                        when things change, everything stays in sync.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
