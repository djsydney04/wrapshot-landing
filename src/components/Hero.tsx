"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

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
                        Your production,
                        <br />
                        <em>beautifully organized.</em>
                    </h1>
                    <p className={styles.subline}>
                        From pre-production to wrap, keep your entire crew
                        <br />
                        in sync without the chaos.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <a href="/signup" className="btn btn-primary">
                            Start for free
                        </a>
                    </motion.div>
                </motion.div>

                {/* Floating production info cards */}
                <motion.div
                    className={styles.card1}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className={styles.cardLabel}>Today's Scenes</div>
                    <div className={styles.cardValue}>12A, 15, 18B</div>
                </motion.div>

                <motion.div
                    className={styles.card2}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className={styles.cardLabel}>Crew Call</div>
                    <div className={styles.cardValue}>6:00 AM</div>
                </motion.div>

                <motion.div
                    className={styles.card3}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <div className={styles.cardLabel}>Location</div>
                    <div className={styles.cardValue}>Studio B</div>
                </motion.div>

                <motion.div
                    className={styles.card4}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <div className={styles.cardLabel}>Day</div>
                    <div className={styles.cardValue}>12 of 24</div>
                </motion.div>
            </div>
        </section>
    );
}
