"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Multiple Scheduling Views",
        description:
            "Switch between grid, kanban, timeline, and list views. Whatever fits your workflow — the data stays in sync.",
    },
    {
        title: "Confidence Ratings on Suggestions",
        description:
            "Every auto-detected element comes with a confidence score. Accept what's right, dismiss what isn't — you're always in control.",
    },
    {
        title: "Real-Time Collaboration",
        description:
            "Invite your team with role-based permissions. Changes sync instantly so everyone's working from the same source of truth.",
    },
    {
        title: "Receipt OCR & Expense Logging",
        description:
            "Snap a photo of a receipt and let OCR pull the details. Expenses tie directly to your budget categories.",
    },
    {
        title: "Industry-Standard Formatting",
        description:
            "Page counts in eighths, color-coded script revisions, and call sheets that match what your crew already expects.",
    },
    {
        title: "PDF Export & Distribution",
        description:
            "Generate call sheets, schedules, and reports as clean PDFs ready to share with your entire production.",
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
                        Built for how
                        <br />
                        <em className="italic">productions actually work.</em>
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
