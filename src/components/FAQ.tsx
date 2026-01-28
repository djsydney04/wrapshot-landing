"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "How is this different from Movie Magic Scheduling?",
        answer:
            "Wrapshoot is built for modern teams. Real-time collaboration, a clean interface, and automatic call sheet generation — without the learning curve or the 90s UI. If your team can use Notion or Google Docs, they can use Wrapshoot.",
    },
    {
        question: "Can I import my existing stripboard?",
        answer:
            "Yes. We support imports from Movie Magic Scheduling (.mms), CSV, and PDF scripts. Our team can help migrate your existing project data.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Absolutely. We use bank-level encryption, SOC 2 compliant infrastructure, and role-based access controls. Your call sheets and contact lists stay private.",
    },
    {
        question: "Does it work offline?",
        answer:
            "The mobile app supports offline access to call sheets and schedules. Changes sync automatically when you're back online.",
    },
    {
        question: "Can cast and agents see the schedule?",
        answer:
            "You control who sees what. Give cast view-only access to their personal schedule without exposing rates, contact info, or other sensitive data.",
    },
    {
        question: "Do you support TV / episodic productions?",
        answer:
            "Yes. Wrapshoot handles both single projects (features) and episodic structures with cross-episode cast and location tracking.",
    },
    {
        question: "What about union compliance?",
        answer:
            "Wrapshoot tracks turnaround times, meal penalties, and minor work hour limits. Get warnings before you create a compliance issue, not after.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Questions? We&apos;ve got answers.</h2>
                </motion.div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={styles.faqItem}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <button
                                className={`${styles.faqQuestion} ${openIndex === index ? styles.open : ""}`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`${styles.chevron} ${openIndex === index ? styles.chevronOpen : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className={styles.faqAnswer}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
