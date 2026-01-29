"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const features = [
    {
        title: "Crew Coordination",
        description: "Keep everyone aligned with real-time updates and call sheets",
    },
];

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <h1 className={styles.headline}>
                        Schedule smarter.
                        <br />
                        <em>Wrap on time.</em>
                    </h1>
                    <p className={styles.subline}>
                        The first AI scheduling tool built for film and TV production.
                        Turn your script into an optimized shooting schedule in minutes.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <a href="https://app.wrapshoot.com" className="btn btn-primary">
                            Start for free
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
