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
                        Wrapshot combines traditional film production tools with modern workflow automation
                        to help indie filmmakers and production teams plan, schedule, and execute their
                        projects efficiently. Your stripeboard, call sheets, breakdowns, budgets, and team—all in
                        one place, all in sync, all in real-time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
