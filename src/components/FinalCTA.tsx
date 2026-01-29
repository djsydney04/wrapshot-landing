"use client";

import { motion } from "framer-motion";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.headline}>
                        Ready to try it?
                    </h2>
                    <p className={styles.subline}>
                        Free for small productions. No credit card.
                    </p>
                    <a href="https://app.wrapshoot.com" className="btn btn-primary">
                        Get Started
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
