"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import styles from "./Pricing.module.css";

const tiers = [
    {
        name: "Starter",
        price: "Free",
        period: "",
        description: "For small productions and indie filmmakers",
        features: [
            "1 active project",
            "Up to 20 shooting days",
            "Up to 10 cast members",
            "Basic call sheet generation",
            "Email support",
            "3 team members",
        ],
        cta: "Get started free",
        ctaHref: "/signup",
        popular: false,
    },
    {
        name: "Pro",
        price: "$99",
        priceAnnual: "$79",
        period: "/month",
        description: "For professional productions",
        features: [
            "Everything in Starter, plus:",
            "Unlimited shooting days",
            "Unlimited cast & crew",
            "Advanced call sheets with custom templates",
            "Day-out-of-days generation",
            "Real-time collaboration",
            "Production reports",
            "Priority support",
            "Unlimited team members",
        ],
        cta: "Start 14-day free trial",
        ctaHref: "/signup?plan=pro",
        popular: true,
    },
    {
        name: "Studio",
        price: "$299",
        period: "/month",
        description: "For production companies and studios",
        features: [
            "Everything in Pro, plus:",
            "Multiple concurrent projects",
            "AI script breakdown",
            "AI scheduling assistant",
            "Custom integrations",
            "SSO / SAML authentication",
            "Dedicated account manager",
            "Custom onboarding and training",
            "API access",
        ],
        cta: "Contact sales",
        ctaHref: "/contact",
        popular: false,
    },
];

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section id="pricing" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>
                        Simple pricing that scales with your production
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Start free. Upgrade when your production grows.
                    </p>

                    <div className={styles.toggle}>
                        <span className={!isAnnual ? styles.toggleActive : ""}>Monthly</span>
                        <button
                            className={styles.toggleSwitch}
                            onClick={() => setIsAnnual(!isAnnual)}
                            aria-label="Toggle annual billing"
                        >
                            <span
                                className={`${styles.toggleKnob} ${isAnnual ? styles.toggleKnobActive : ""}`}
                            />
                        </button>
                        <span className={isAnnual ? styles.toggleActive : ""}>
                            Annual <span className={styles.saveBadge}>Save 20%</span>
                        </span>
                    </div>
                </motion.div>

                <div className={styles.grid}>
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            className={`${styles.card} ${tier.popular ? styles.cardPopular : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {tier.popular && (
                                <div className={styles.popularBadge}>Most Popular</div>
                            )}
                            <div className={styles.cardHeader}>
                                <h3 className={styles.tierName}>{tier.name}</h3>
                                <div className={styles.priceWrapper}>
                                    <span className={styles.price}>
                                        {isAnnual && tier.priceAnnual ? tier.priceAnnual : tier.price}
                                    </span>
                                    {tier.period && (
                                        <span className={styles.period}>{tier.period}</span>
                                    )}
                                </div>
                                <p className={styles.tierDescription}>{tier.description}</p>
                            </div>

                            <ul className={styles.featureList}>
                                {tier.features.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <Check size={18} className={styles.checkIcon} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={tier.ctaHref}
                                className={`btn ${tier.popular ? "btn-primary" : "btn-secondary"} ${styles.cta}`}
                            >
                                {tier.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className={styles.customNote}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <strong>Need something different?</strong> We offer custom packages
                    for film schools, non-profits, and large studio deals.{" "}
                    <a href="/contact" className={styles.customLink}>
                        Get in touch →
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
