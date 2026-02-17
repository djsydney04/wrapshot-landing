"use client";

import { motion } from "framer-motion";
import { Briefcase, LineChart, Users, Film, Clapperboard } from "lucide-react";

const audiences = [
    {
        icon: <Briefcase size={24} />,
        title: "1st ADs & Coordinators",
        description:
            "Your command center for the entire shoot. Manage the stripeboard, generate call sheets, track every moving piece—all in one place.",
    },
    {
        icon: <LineChart size={24} />,
        title: "Line Producers & UPMs",
        description:
            "See budget impact in real-time. Track cast days, location costs, and schedule efficiency. Know exactly where your money is going.",
    },
    {
        icon: <Users size={24} />,
        title: "Department Heads",
        description:
            "Know exactly what's needed and when. Filter to your department, see prep days, coordinate with other teams seamlessly.",
    },
    {
        icon: <Clapperboard size={24} />,
        title: "Production Managers",
        description:
            "Oversee all aspects of your production. From budgets to schedules, cast to crew—maintain visibility across your entire project.",
    },
    {
        icon: <Film size={24} />,
        title: "Independent Filmmakers",
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
                    <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">Who it&apos;s for</p>
                    <h2 className="font-serif text-[40px] font-normal max-w-2xl mx-auto max-md:text-[32px]">
                        Made for the people who<br />
                        <em className="italic">make movies happen.</em>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            className="p-8 border border-border rounded-xl bg-white"
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
