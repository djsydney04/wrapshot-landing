"use client";

import { motion } from "framer-motion";

const phases = [
    {
        phase: "Import",
        title: "Script Upload & Analysis",
        description:
            "Drop in your PDF. Wrapshoot extracts every scene, location, character, and production element automatically — with confidence ratings so you stay in control.",
    },
    {
        phase: "Breakdown",
        title: "Scene-by-Scene Breakdown",
        description:
            "25+ element categories — props, wardrobe, vehicles, VFX, SFX, and more — auto-suggested for each scene. Accept, dismiss, or add your own in a click.",
    },
    {
        phase: "Assemble",
        title: "Cast, Crew & Locations",
        description:
            "Build out your team with department-level roles, availability, and rate tracking. Scout and manage locations with permit status, parking, power, and sound notes.",
    },
    {
        phase: "Schedule",
        title: "Stripeboard & Day Planning",
        description:
            "Classic color-coded stripeboard with drag-and-drop scheduling. Arrange scenes across shooting days in grid, kanban, timeline, or list view — page counts in industry-standard eighths.",
    },
    {
        phase: "Budget",
        title: "Budget & Gear Tracking",
        description:
            "Create budgets with customizable categories and templates. Log expenses, upload receipts with OCR parsing, and track equipment by department so every unit knows what's needed and when.",
    },
    {
        phase: "Distribute",
        title: "Call Sheets & Collaboration",
        description:
            "Auto-generate call sheets from your shooting day data — scenes, call times, locations, department info — and export to PDF. Real-time sync keeps your entire team on the same page.",
    },
    {
        phase: "Revise",
        title: "Script Versions & Revisions",
        description:
            "Upload new drafts with industry-standard color coding. Track revision history, compare versions, and always know which draft the team is working from.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-section">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">
                        How it works
                    </p>
                    <h2 className="font-serif text-[40px] font-normal leading-[1.15] max-w-xl max-md:text-[32px]">
                        Your full production timeline,
                        <br />
                        <em className="italic">from script to screen.</em>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border max-md:left-[15px]" />

                    <div className="flex flex-col gap-12">
                        {phases.map((step, i) => (
                            <motion.div
                                key={step.phase}
                                className="relative flex items-start gap-8 max-md:gap-5"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: i * 0.06,
                                    duration: 0.5,
                                }}
                            >
                                {/* Dot */}
                                <div className="relative z-10 flex-shrink-0 w-[47px] flex justify-center max-md:w-[31px]">
                                    <div className="w-[11px] h-[11px] rounded-full bg-text/85 mt-[7px] shadow-[0_0_0_4px_rgba(17,24,39,0.08)]" />
                                </div>

                                {/* Content */}
                                <div className="pb-2 flex-1 min-w-0 pr-2">
                                    <p className="text-[11px] uppercase tracking-[0.12em] text-text-muted mb-1">
                                        {step.phase}
                                    </p>
                                    <h3 className="text-lg font-medium text-text mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-text-secondary max-w-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Terminal dot */}
                        <div className="relative flex items-start gap-8 max-md:gap-5">
                            <div className="relative z-10 flex-shrink-0 w-[47px] flex justify-center max-md:w-[31px]">
                                <div className="w-[11px] h-[11px] rounded-full border-2 border-text/65 bg-bg mt-[7px]" />
                            </div>
                            <p className="text-sm font-medium text-text-muted italic mt-[5px]">
                                That&apos;s a wrap.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
