"use client";

import { motion } from "framer-motion";
import styles from "./SocialProof.module.css";

export default function SocialProof() {
    const stats = [
        { value: "500+", label: "shooting days scheduled" },
        { value: "50+", label: "productions" },
        { value: "4.9/5", label: "user rating" },
    ];

    return (
        <section className={styles.socialProof}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.stats}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.stat}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
