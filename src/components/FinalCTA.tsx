"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.backgroundGlow} />
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.headline}>
                        Ready to modernize your production workflow?
                    </h2>
                    <p className={styles.subheadline}>
                        Join hundreds of productions already using Wrapshoot to save time
                        and reduce headaches.
                    </p>
                    <a href="/signup" className={`btn btn-primary btn-lg ${styles.cta}`}>
                        Start your free trial
                        <ArrowRight size={20} />
                    </a>
                    <p className={styles.smallPrint}>
                        No credit card required. Free for productions under 20 days.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
