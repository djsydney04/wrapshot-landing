"use client";

import { motion } from "framer-motion";
import { Briefcase, LineChart, Users, Film, Clapperboard } from "lucide-react";

const audiences = [
    {
        icon: <Briefcase size={24} />,
        title: "1st ADs & Coordinators",
        description:
            "Stripboard, call sheets, and day planning in one view. Stop rebuilding spreadsheets every time the schedule changes.",
    },
    {
        icon: <LineChart size={24} />,
        title: "Line Producers & UPMs",
        description:
            "Budget tracking tied directly to your schedule. Cast days, location costs, and overages update as the board moves.",
    },
    {
        icon: <Users size={24} />,
        title: "Department Heads",
        description:
            "Filter to your department. See what you need, when you need it, and what other departments are expecting from you.",
    },
    {
        icon: <Clapperboard size={24} />,
        title: "Production Managers",
        description:
            "Full visibility across budget, schedule, crew, and locations without chasing down separate documents.",
    },
    {
        icon: <Film size={24} />,
        title: "Independent Filmmakers",
        description:
            "The same workflow used on larger productions, scaled down. Free tier included.",
    },
];

export default function WhoItsFor() {
    return (
        <section className="py-section">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">Who it&apos;s for</p>
                    <h2 className="font-serif text-[40px] font-normal max-w-2xl max-md:text-[32px]">
                        Built for every department,<br />
                        <em className="italic">not just production.</em>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 gap-x-14 border-t border-border max-md:grid-cols-1">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            className="py-7 border-b border-border/80"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-4 text-text h-10 w-10 rounded-full bg-[#f1f2f4] flex items-center justify-center">{audience.icon}</div>
                            <h3 className="text-lg font-medium mb-2">{audience.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{audience.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
