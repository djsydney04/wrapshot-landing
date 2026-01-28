"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        quote: "We cut our prep time in half. No more endless spreadsheet updates — everything just syncs.",
        author: "Sarah Chen",
        role: "1st AD",
        production: "Independent Feature",
    },
    {
        quote: "The call sheet feature alone is worth it. What used to take me 2 hours now takes 10 minutes.",
        author: "Marcus Johnson",
        role: "Line Producer",
        production: "Episodic TV",
    },
    {
        quote: "Finally, a scheduling tool that understands how productions actually work. Game changer.",
        author: "Emily Rodriguez",
        role: "Production Coordinator",
        production: "Commercial",
    },
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.sectionTitle}>Loved by production teams</h2>
                </motion.div>
                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div className={styles.authorInfo}>
                                    <p className={styles.authorName}>{testimonial.author}</p>
                                    <p className={styles.authorRole}>
                                        {testimonial.role} · {testimonial.production}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
