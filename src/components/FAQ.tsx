"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

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
        <section id="faq" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.layout}>
                    <motion.div
                        className={styles.header}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className={styles.label}>FAQ</p>
                        <h2 className={styles.headline}>
                            Common<br />
                            <em>questions.</em>
                        </h2>
                    </motion.div>

                    <div className={styles.list}>
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className={styles.item}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <button
                                    className={styles.question}
                                    onClick={() => setOpen(open === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className={`${styles.icon} ${open === i ? styles.open : ""}`}>
                                        +
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {open === i && (
                                        <motion.div
                                            className={styles.answer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <p>{faq.a}</p>
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
