"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import posthog from "posthog-js";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const copyY = useTransform(scrollYProgress, [0, 1], [0, -34]);
    const videoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

    return (
        <section ref={sectionRef} className="hero-stage pt-[220px] pb-32 relative overflow-hidden max-md:pt-[160px] max-md:pb-20">
            <div className="max-w-container mx-auto px-12 max-md:px-6">
                <motion.div
                    className="text-center max-w-[820px] mx-auto mb-24 max-md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.div style={{ y: copyY }}>
                        <p className="hero-kicker mb-8 justify-center">
                            Production management software
                        </p>
                        <h1 className="font-serif text-[72px] font-normal leading-[1.05] tracking-[-0.03em] mb-7 text-text max-lg:text-[56px] max-md:text-[40px]">
                            Breakdowns, boards,
                            <br />
                            <em className="italic">and call sheets in one place.</em>
                        </h1>
                        <p className="text-[19px] leading-[1.7] text-text-secondary mx-auto max-w-[540px] mb-14 max-md:text-[17px] max-md:mb-10">
                            Wrapshoot handles scheduling, budgets, crew coordination,
                            and distribution so you can focus on the shoot.
                        </p>
                        <motion.div
                            className="flex items-center justify-center gap-4 max-md:flex-col"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <a href="https://app.wrapshoot.com" className="btn btn-primary" onClick={() => posthog.capture("cta_clicked", { location: "hero", label: "Start Free" })}>
                                Start Free
                            </a>
                            <a href="#how-it-works" className="btn btn-outline" onClick={() => posthog.capture("cta_clicked", { location: "hero", label: "See How It Works" })}>
                                See How It Works
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-video-shell max-w-[1080px] mx-auto"
                    style={{ y: videoY, scale: videoScale }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero-video-frame aspect-[16/9]">
                        <iframe
                            src="https://player.mux.com/5qO2F2AZ7Y7OvUXgdgp02AmhFmGnP6TeLR39twNdCwh8?autoplay=muted&loop=true&controls=false"
                            style={{ width: "100%", height: "100%", border: "none" }}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                        <div className="hero-video-glow" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
