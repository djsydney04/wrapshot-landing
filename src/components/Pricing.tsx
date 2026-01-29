"use client";

import { motion } from "framer-motion";
import styles from "./Pricing.module.css";

const tiers = [
    {
        name: "Free",
        price: "$0",
        note: "forever",
        features: ["Up to 10 shooting days", "Unlimited team", "Basic call sheets"],
        cta: "Get Started",
        primary: false,
    },
    {
        name: "Pro",
        price: "$49",
        note: "/month",
        features: ["Unlimited days", "Advanced call sheets", "Day-out-of-days", "Crew notifications"],
        cta: "Get Started",
        primary: true,
    },
    {
        name: "Studio",
        price: "Custom",
        note: "contact us",
        features: ["Everything in Pro", "Multi-project", "SSO & security", "Dedicated support"],
        cta: "Contact",
        primary: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className={styles.section}>
            <div className={styles.inner}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className={styles.label}>Pricing</p>
                    <h2 className={styles.headline}>
                        Start free,<br />
                        <em>upgrade when ready.</em>
                    </h2>
                </motion.div>

                <div className={styles.grid}>
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            className={`${styles.card} ${tier.primary ? styles.primary : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className={styles.cardTop}>
                                <h3 className={styles.tierName}>{tier.name}</h3>
                                <div className={styles.priceRow}>
                                    <span className={styles.price}>{tier.price}</span>
                                    <span className={styles.note}>{tier.note}</span>
                                </div>
                            </div>
                            <ul className={styles.features}>
                                {tier.features.map((f, j) => (
                                    <li key={j}>{f}</li>
                                ))}
                            </ul>
                            <a href="https://app.wrapshoot.com" className={styles.cta}>
                                {tier.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
