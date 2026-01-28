"use client";

import { motion } from "framer-motion";
import styles from "./SocialProof.module.css";

export default function SocialProof() {
    return (
        <section className={styles.socialProof}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className={styles.label}>Trusted by productions at</p>
                <div className={styles.logos}>
                    <span className={styles.logo}>A24</span>
                    <span className={styles.logo}>Searchlight</span>
                    <span className={styles.logo}>Focus Features</span>
                    <span className={styles.logo}>Blumhouse</span>
                    <span className={styles.logo}>NEON</span>
                </div>
            </motion.div>
        </section>
    );
}
