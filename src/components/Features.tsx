"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Four Scheduling Views",
        description:
            "Grid, kanban, timeline, and list. Same data, different lens — switch without losing work.",
    },
    {
        title: "Confidence-Scored Suggestions",
        description:
            "Auto-detected elements include confidence ratings. Review what the parser found, accept or dismiss per scene.",
    },
    {
        title: "Real-Time Sync",
        description:
            "Role-based permissions and live collaboration. One person updates the schedule, everyone sees it immediately.",
    },
    {
        title: "Receipt OCR",
        description:
            "Photograph a receipt. OCR extracts the line items and maps them to your budget categories automatically.",
    },
    {
        title: "Standard Formatting",
        description:
            "Eighth-based page counts, color-coded revisions, and call sheets formatted the way your crew expects.",
    },
    {
        title: "PDF Export",
        description:
            "Call sheets, schedules, and reports export as clean, print-ready PDFs.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-section">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">
                        What you get
                    </p>
                    <h2 className="font-serif text-[40px] font-normal leading-[1.15] max-w-xl max-md:text-[32px]">
                        Details that
                        <br />
                        <em className="italic">matter on set.</em>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 gap-x-14 border-t border-border max-md:grid-cols-1">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            className="py-7 border-b border-border/80"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                        >
                            <p className="text-[11px] uppercase tracking-[0.1em] text-text-muted mb-2">
                                {(i + 1).toString().padStart(2, "0")}
                            </p>
                            <h3 className="text-lg font-medium mb-3 text-text">
                                {f.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-text-secondary">
                                {f.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
