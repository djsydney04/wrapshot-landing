"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "Is there a free plan?",
        a: "Yes. The free tier covers one project with up to three team members, including scene management and community support.",
    },
    {
        q: "How long does setup take?",
        a: "Most teams are working within an hour. Upload a script for automatic parsing, or build your production from scratch.",
    },
    {
        q: "Can I import from other tools?",
        a: "Wrapshoot supports PDF script import with automatic scene and element extraction. CSV import for cast and crew data is on the roadmap.",
    },
    {
        q: "Is my data secure?",
        a: "All data is encrypted in transit and at rest. We use standard security practices and secure cloud infrastructure.",
    },
    {
        q: "Does it support simultaneous editing?",
        a: "Yes. Real-time collaboration is built in — changes sync across all team members instantly.",
    },
    {
        q: "How does script analysis work?",
        a: "Upload a PDF. Wrapshoot extracts scenes, detects INT/EXT and DAY/NIGHT, flags elements like props and wardrobe, generates synopses, and estimates page counts. You review and accept before anything lands on the board.",
    },
    {
        q: "What export formats are available?",
        a: "Call sheets, schedules, and budget reports export as PDF. Additional export formats are in development.",
    },
    {
        q: "Do I need technical knowledge?",
        a: "No. The interface mirrors traditional production workflows — stripeboards, breakdowns, call sheets. If you've worked on a set, you already know how to use it.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-section border-t border-border/70">
            <div className="max-w-container mx-auto px-12">
                <div className="grid grid-cols-[1fr_1.5fr] gap-20 max-lg:grid-cols-1 max-lg:gap-12">
                    <motion.div
                        className="sticky top-[120px] self-start max-lg:static"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">FAQ</p>
                        <h2 className="font-serif text-[40px] font-normal leading-[1.15] max-md:text-[32px]">
                            Common<br />
                            <em className="italic">questions.</em>
                        </h2>
                    </motion.div>

                    <div>
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className="border-b border-border first:border-t"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <button
                                    className="flex justify-between items-center w-full py-6 text-base font-medium text-left text-text max-md:text-[15px] max-md:py-5"
                                    onClick={() => setOpen(open === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className={`text-xl text-text-muted transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                                        +
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {open === i && (
                                        <motion.div
                                            className="overflow-hidden"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <p className="pb-6 text-[15px] leading-[1.6] text-text-secondary">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
