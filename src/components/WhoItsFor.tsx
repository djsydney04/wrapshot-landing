"use client";

import { motion } from "framer-motion";
import { Briefcase, LineChart, Users, Film } from "lucide-react";
import styles from "./WhoItsFor.module.css";

const audiences = [
    {
        icon: <Briefcase size={24} />,
        title: "ADs & Coordinators",
        description:
            "Your command center for the entire shoot. Manage the stripboard, generate call sheets, track every moving piece.",
    },
    {
        icon: <LineChart size={24} />,
        title: "Line Producers & UPMs",
        description:
            "See budget impact in real-time. Track cast days, location costs, and schedule efficiency at a glance.",
    },
    {
        icon: <Users size={24} />,
        title: "Department Heads",
        description:
            "Know exactly what's needed and when. Filter to your department, see prep days, coordinate with other teams.",
    },
    {
        icon: <Film size={24} />,
        title: "Indie Filmmakers",
        description:
            "Professional-grade tools without the learning curve or the price tag. Start free, scale when you need to.",
    },
];

export default function WhoItsFor() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>
                        Made for the people who make movies happen
                    </h2>
                </motion.div>

                <div className={styles.grid}>
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardIcon}>{audience.icon}</div>
                            <h3 className={styles.cardTitle}>{audience.title}</h3>
                            <p className={styles.cardDescription}>{audience.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
