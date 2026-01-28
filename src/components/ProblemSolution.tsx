"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Sparkles } from "lucide-react";
import styles from "./ProblemSolution.module.css";

export default function ProblemSolution() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Production scheduling is broken</h2>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.problemCard}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className={styles.cardIcon}>
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className={styles.cardTitle}>The problem</h3>
                        <p className={styles.cardText}>
                            You&apos;re juggling three different spreadsheets, a legacy program from
                            the 90s, and a WhatsApp group that&apos;s 400 messages deep. Your call
                            sheets live in one place, your stripboard in another, and your cast
                            availability in someone&apos;s head.
                        </p>
                        <p className={styles.cardText}>
                            Every schedule change means updating five documents and hoping
                            nobody misses the email.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.solutionCard}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.cardIconAccent}>
                            <Sparkles size={24} />
                        </div>
                        <h3 className={styles.cardTitle}>There&apos;s a better way</h3>
                        <p className={styles.cardText}>
                            Wrapshoot is a single source of truth for your entire production
                            schedule. Drag a scene to a new day and watch your call sheets,
                            day-out-of-days, and crew notifications update automatically.
                        </p>
                        <p className={styles.cardTextHighlight}>
                            It&apos;s the tool we wished existed when we were on set.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
