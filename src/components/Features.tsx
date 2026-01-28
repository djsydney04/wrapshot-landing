"use client";

import { motion } from "framer-motion";
import styles from "./Features.module.css";

const features = [
    {
        num: "01",
        title: "Project Dashboard",
        description: "All your productions in one view. Track progress, upcoming shoots, and team activity.",
    },
    {
        num: "02",
        title: "Smart Scheduling",
        description: "Drag scenes, days update. Conflicts flagged automatically. Everything syncs.",
    },
    {
        num: "03",
        title: "Call Sheets",
        description: "One click to generate. Send via email or app. Cast and crew notified instantly.",
    },
    {
        num: "04",
        title: "Team Coordination",
        description: "Availability, contacts, day-out-of-days—all visible to who needs it.",
    },
];

export default function Features() {
    return (
        <section id="features" className={styles.section}>
            <div className={styles.inner}>
                <motion.p
                    className={styles.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    What you get
                </motion.p>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <motion.div
                            key={f.num}
                            className={styles.item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <span className={styles.num}>{f.num}</span>
                            <h3 className={styles.title}>{f.title}</h3>
                            <p className={styles.desc}>{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
