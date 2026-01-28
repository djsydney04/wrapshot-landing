"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    FileText,
    Users,
    Sparkles,
    LayoutGrid,
    Filter,
    RefreshCw,
    Eye,
    Mail,
    Bell,
    Clock,
    AlertCircle,
    FileSearch,
    GitBranch,
} from "lucide-react";
import styles from "./Features.module.css";

interface FeatureProps {
    title: string;
    description: string;
    points: string[];
    icon: React.ReactNode;
    visual: React.ReactNode;
    reversed?: boolean;
    badge?: string;
}

function Feature({ title, description, points, icon, visual, reversed, badge }: FeatureProps) {
    return (
        <motion.div
            className={`${styles.feature} ${reversed ? styles.reversed : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.featureContent}>
                <div className={styles.featureIcon}>{icon}</div>
                {badge && <span className={styles.badge}>{badge}</span>}
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
                <ul className={styles.featurePoints}>
                    {points.map((point, index) => (
                        <li key={index} className={styles.featurePoint}>
                            <span className={styles.pointCheck}>✓</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.featureVisual}>{visual}</div>
        </motion.div>
    );
}

function CalendarVisual() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const scenes = [
        { day: 0, start: 0, length: 2, color: "var(--day-ext)", label: "Sc 1-3" },
        { day: 1, start: 0, length: 3, color: "var(--day-int)", label: "Sc 4-8" },
        { day: 2, start: 1, length: 2, color: "var(--night-int)", label: "Sc 9-11" },
        { day: 3, start: 0, length: 2, color: "var(--day-ext)", label: "Sc 12-14" },
        { day: 3, start: 2, length: 1, color: "var(--night-ext)", label: "Sc 15" },
        { day: 4, start: 0, length: 3, color: "var(--day-int)", label: "Sc 16-20" },
    ];

    return (
        <div className={styles.calendarVisual}>
            <div className={styles.calendarHeader}>
                {days.map((day) => (
                    <div key={day} className={styles.calendarDay}>{day}</div>
                ))}
            </div>
            <div className={styles.calendarGrid}>
                {days.map((day, dayIndex) => (
                    <div key={day} className={styles.calendarColumn}>
                        {[0, 1, 2].map((slot) => (
                            <div key={slot} className={styles.calendarSlot}>
                                {scenes
                                    .filter((s) => s.day === dayIndex && s.start === slot)
                                    .map((scene, i) => (
                                        <div
                                            key={i}
                                            className={styles.calendarEvent}
                                            style={{
                                                backgroundColor: scene.color,
                                                height: `${scene.length * 100}%`,
                                            }}
                                        >
                                            {scene.label}
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

function CallSheetVisual() {
    return (
        <div className={styles.callSheetVisual}>
            <div className={styles.callSheetHeader}>
                <div className={styles.callSheetTitle}>CALL SHEET #3</div>
                <div className={styles.callSheetDate}>Tue, Jan 27, 2025</div>
            </div>
            <div className={styles.callSheetSection}>
                <div className={styles.callSheetLabel}>GENERAL CREW CALL</div>
                <div className={styles.callSheetTime}>07:00 AM</div>
            </div>
            <div className={styles.callSheetSection}>
                <div className={styles.callSheetLabel}>FIRST SHOT</div>
                <div className={styles.callSheetTime}>08:30 AM</div>
            </div>
            <div className={styles.callSheetCast}>
                <div className={styles.callSheetCastHeader}>
                    <span>CAST</span>
                    <span>CALL</span>
                </div>
                <div className={styles.callSheetCastRow}>
                    <span>1. John Smith</span>
                    <span>07:30 AM</span>
                </div>
                <div className={styles.callSheetCastRow}>
                    <span>2. Jane Doe</span>
                    <span>08:00 AM</span>
                </div>
            </div>
        </div>
    );
}

function CastVisual() {
    const cast = [
        { name: "John Smith", days: [true, true, false, true, false, true, false] },
        { name: "Jane Doe", days: [false, true, true, false, true, true, false] },
        { name: "Mike Johnson", days: [true, false, true, true, false, false, true] },
    ];

    return (
        <div className={styles.castVisual}>
            <div className={styles.castHeader}>
                <span className={styles.castName}>Cast Member</span>
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <span key={d} className={styles.castDay}>D{d}</span>
                ))}
            </div>
            {cast.map((member, index) => (
                <div key={index} className={styles.castRow}>
                    <span className={styles.castName}>{member.name}</span>
                    {member.days.map((working, i) => (
                        <span
                            key={i}
                            className={`${styles.castCell} ${working ? styles.working : ""}`}
                        >
                            {working ? "W" : ""}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}

function AIVisual() {
    return (
        <div className={styles.aiVisual}>
            <div className={styles.aiScript}>
                <div className={styles.aiScriptLine}>INT. COFFEE SHOP - DAY</div>
                <div className={styles.aiScriptLine}>
                    <span className={styles.aiHighlight}>SARAH</span> enters the busy café...
                </div>
                <div className={styles.aiScriptLine}>
                    <span className={styles.aiHighlight}>JAMES</span> waves from a corner booth.
                </div>
            </div>
            <div className={styles.aiArrow}>→</div>
            <div className={styles.aiBreakdown}>
                <div className={styles.aiBreakdownItem}>
                    <span className={styles.aiTag}>Scene</span> INT. Coffee Shop - DAY
                </div>
                <div className={styles.aiBreakdownItem}>
                    <span className={styles.aiTag}>Cast</span> Sarah, James
                </div>
                <div className={styles.aiBreakdownItem}>
                    <span className={styles.aiTag}>Location</span> Coffee Shop
                </div>
            </div>
        </div>
    );
}

export default function Features() {
    const features: FeatureProps[] = [
        {
            title: "See your entire shoot at a glance",
            description:
                "A modern calendar interface that actually makes sense. Color-coded by location, cast, or scene type. Drag and drop to reschedule. Click to see every detail. Your stripboard, reimagined for how people work today.",
            points: [
                "Day, week, and month views",
                "Traditional stripboard mode for ADs who prefer it",
                "Filter by location, cast, or department",
                "Real-time collaboration — see who's viewing and editing",
            ],
            icon: <Calendar size={24} />,
            visual: <CalendarVisual />,
        },
        {
            title: "Call sheets that write themselves",
            description:
                "Stop copying and pasting between documents. Wrapshoot pulls your scheduled scenes, cast calls, and crew times directly into a polished call sheet. One click to generate. One click to distribute.",
            points: [
                "Auto-populated from your schedule",
                "Custom templates for your production",
                "Email and push notification distribution",
                "Track who's viewed it",
            ],
            icon: <FileText size={24} />,
            visual: <CallSheetVisual />,
            reversed: true,
        },
        {
            title: "Everyone on the same page",
            description:
                "Track cast availability, contracts, and work days in one place. Automatically calculate day-out-of-days. Get alerts before you schedule someone who isn't available.",
            points: [
                "Availability calendars with hold/confirm status",
                "Contract date tracking",
                "Union turnaround compliance warnings",
                "Contact info and agent details (visible only to authorized users)",
            ],
            icon: <Users size={24} />,
            visual: <CastVisual />,
        },
        {
            title: "From script to schedule in minutes",
            description:
                "Upload your script and let Wrapshoot identify scenes, characters, locations, and elements. Review and refine the AI's work, then start scheduling immediately. Spend your time making creative decisions, not data entry.",
            points: [
                "Automatic scene detection",
                "Character and element tagging",
                "Location suggestions",
                "Revision tracking with change highlights",
            ],
            icon: <Sparkles size={24} />,
            visual: <AIVisual />,
            reversed: true,
            badge: "Coming Soon",
        },
    ];

    return (
        <section id="features" className={styles.section}>
            <div className={styles.container}>
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} />
                ))}
            </div>
        </section>
    );
}
