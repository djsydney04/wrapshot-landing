"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "Is there a free plan?",
        a: "Yes! Our Free plan lets you manage 1 project with up to 3 team members. It includes basic scene management and community support—perfect for getting started.",
    },
    {
        q: "How long does it take to get started?",
        a: "Most teams are up and running in under an hour. Upload your script for automatic analysis, or start from scratch and build your production manually.",
    },
    {
        q: "Can I import data from other software?",
        a: "Currently, Wrapshoot supports PDF script import with automatic analysis. We extract scenes, elements, and more automatically. CSV import for cast/crew is planned for a future update.",
    },
    {
        q: "Is my data secure?",
        a: "Absolutely. All data is encrypted in transit and at rest. We use industry-standard security practices and secure cloud infrastructure to protect your productions.",
    },
    {
        q: "Can multiple people edit at the same time?",
        a: "Yes! Wrapshoot supports real-time collaboration. Changes sync instantly across all team members, so everyone is always on the same page.",
    },
    {
        q: "How does script analysis work?",
        a: "Upload your script PDF and Wrapshoot automatically extracts scenes, detects INT/EXT and DAY/NIGHT, identifies production elements like props and wardrobe, generates synopses, and estimates shooting times. Review and accept suggestions with a click.",
    },
    {
        q: "What can I export?",
        a: "You can export call sheets as PDF, budget reports, and more export options are coming soon. Everything is designed to integrate smoothly with your existing workflow.",
    },
    {
        q: "Do I need technical knowledge to use Wrapshoot?",
        a: "Not at all. Wrapshoot is designed for filmmakers, not tech experts. The interface is intuitive and mirrors traditional film production workflows you already know.",
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
