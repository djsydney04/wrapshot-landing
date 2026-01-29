"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "Is there a free plan?",
        a: "Yes. Productions with 10 or fewer shooting days can use Wrapshoot free, forever.",
    },
    {
        q: "How long to get started?",
        a: "Most teams are running in under an hour. Import your breakdown or start fresh.",
    },
    {
        q: "Can I import existing data?",
        a: "We support Movie Magic, Final Draft, and common spreadsheet formats.",
    },
    {
        q: "Who needs a license?",
        a: "Nobody. All plans include unlimited team members.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-section border-t border-border">
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
