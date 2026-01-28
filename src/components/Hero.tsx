"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundGlow} />
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className={styles.headline}>
                            The modern way to schedule{" "}
                            <span className="gradient-text">film productions</span>
                        </h1>
                        <p className={styles.subheadline}>
                            Wrapshoot brings your stripboard, call sheets, and crew coordination
                            into one intuitive platform. Built for how productions actually work.
                        </p>
                        <div className={styles.ctas}>
                            <a href="/signup" className={`btn btn-primary btn-lg ${styles.primaryCta}`}>
                                Start free trial
                                <ArrowRight size={20} />
                            </a>
                            <a href="#demo" className={styles.secondaryCta}>
                                <Play size={18} />
                                Watch demo
                            </a>
                        </div>
                        <p className={styles.smallPrint}>
                            Free for productions under 20 shooting days. No credit card required.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.visual}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className={styles.productPreview}>
                            <div className={styles.previewHeader}>
                                <div className={styles.windowControls}>
                                    <span className={styles.windowDot} style={{ background: "#EF4444" }} />
                                    <span className={styles.windowDot} style={{ background: "#F59E0B" }} />
                                    <span className={styles.windowDot} style={{ background: "#22C55E" }} />
                                </div>
                                <span className={styles.projectName}>Midnight in Paris</span>
                            </div>
                            <div className={styles.previewContent}>
                                <div className={styles.sidebar}>
                                    <div className={styles.sidebarItem}>
                                        <span className={styles.sidebarIcon}>📊</span> Dashboard
                                    </div>
                                    <div className={styles.sidebarItem}>
                                        <span className={styles.sidebarIcon}>📁</span> Projects
                                    </div>
                                    <div className={`${styles.sidebarItem} ${styles.active}`}>
                                        <span className={styles.sidebarIcon}>📅</span> Schedule
                                    </div>
                                    <div className={styles.sidebarItem}>
                                        <span className={styles.sidebarIcon}>👥</span> Cast
                                    </div>
                                    <div className={styles.sidebarItem}>
                                        <span className={styles.sidebarIcon}>🎬</span> Crew
                                    </div>
                                </div>
                                <div className={styles.mainContent}>
                                    <div className={styles.scheduleHeader}>
                                        <span className={styles.shootingDays}>7 shooting days · 2 completed</span>
                                        <div className={styles.viewToggle}>
                                            <span className={styles.toggleActive}>List</span>
                                            <span>Calendar</span>
                                        </div>
                                    </div>
                                    <div className={styles.scheduleTable}>
                                        <div className={styles.tableHeader}>
                                            <span>Day</span>
                                            <span>Date</span>
                                            <span>Unit</span>
                                            <span>Status</span>
                                        </div>
                                        <div className={styles.tableRow}>
                                            <span className={styles.dayNum}>Day 1</span>
                                            <span>Wed, Jan 21</span>
                                            <span className={styles.unitBadge}>MAIN</span>
                                            <span className={styles.statusComplete}>COMPLETED</span>
                                        </div>
                                        <div className={styles.tableRow}>
                                            <span className={styles.dayNum}>Day 2</span>
                                            <span>Fri, Jan 23</span>
                                            <span className={styles.unitBadge}>MAIN</span>
                                            <span className={styles.statusComplete}>COMPLETED</span>
                                        </div>
                                        <div className={styles.tableRow}>
                                            <span className={styles.dayNum}>Day 3</span>
                                            <span>Tue, Jan 27</span>
                                            <span className={styles.unitBadge}>MAIN</span>
                                            <span className={styles.statusConfirmed}>CONFIRMED</span>
                                        </div>
                                        <div className={styles.tableRow}>
                                            <span className={styles.dayNum}>Day 4</span>
                                            <span>Thu, Jan 29</span>
                                            <span className={styles.unitBadge}>MAIN</span>
                                            <span className={styles.statusScheduled}>SCHEDULED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
