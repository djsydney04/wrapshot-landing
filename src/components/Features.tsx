"use client";

import { motion } from "framer-motion";

const features = [
    {
        num: "01",
        title: "Project Dashboard",
        description: "All your productions in one view. Track progress across development, pre-production, shooting, and post. Set dates, add notes, see what stage each project is in.",
    },
    {
        num: "02",
        title: "Script & Breakdown",
        description: "Upload script versions with industry-standard color codes. Break down every scene—assign cast, locations, props, wardrobe, VFX, and more.",
    },
    {
        num: "03",
        title: "Cast & Locations",
        description: "Store contacts, track contracts and availability, manage permits. Know who's confirmed, what locations are approved, and set backups.",
    },
    {
        num: "04",
        title: "Smart Scheduling",
        description: "Drag scenes to shooting days. View as calendar, stripboard, or kanban. Set call times per actor. Conflicts flagged automatically.",
    },
    {
        num: "05",
        title: "Call Sheets",
        description: "Generate call sheets in one click. Cast, crew, scenes, locations, safety info—all included. Export to PDF or send directly.",
    },
    {
        num: "06",
        title: "Team Coordination",
        description: "Invite crew by department. Set permissions for who can view or edit. Day-out-of-days, availability, and contacts—all visible to who needs it.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-section">
            <div className="max-w-container mx-auto px-12">
                <motion.p
                    className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    What you get
                </motion.p>

                <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.num}
                            className=""
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <span className="text-xs text-text-muted mb-2 block">{f.num}</span>
                            <h3 className="text-lg font-medium mb-2">{f.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
