"use client";

import { motion } from "framer-motion";
import { Briefcase, LineChart, Users, Film } from "lucide-react";

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
        <section className="py-section">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-serif text-[40px] font-normal max-w-2xl mx-auto">
                        Made for the people who make movies happen
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            className="p-8 border border-border rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-4 text-text">{audience.icon}</div>
                            <h3 className="text-lg font-medium mb-2">{audience.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{audience.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
