"use client";

import { motion } from "framer-motion";
import styles from "./ProblemSolution.module.css";

export default function ProblemSolution() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.text}>
                        Production scheduling is still stuck in spreadsheets and legacy software.
                        Wrapshoot brings your stripboard, call sheets, and team into one place—so
                        when things change, everything stays in sync.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
