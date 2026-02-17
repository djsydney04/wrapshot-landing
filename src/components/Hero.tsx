"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="pt-[140px] pb-16 overflow-hidden relative bg-[#FAFAFA]">
            {/* Gradient background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#FAFAFA] to-[#FAFAFA] opacity-80 pointer-events-none"></div>

            <div className="max-w-container mx-auto px-12 relative z-10">
                <motion.div
                    className="max-w-[720px] mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <h1 className="font-serif text-[64px] font-normal leading-[1.1] tracking-[-0.02em] mb-6 text-text max-md:text-[44px]">
                        From script to screen,
                        <br />
                        <em className="italic">beautifully organized.</em>
                    </h1>
                    <p className="text-[20px] leading-[1.6] text-text-secondary mb-10 max-w-[560px] mx-auto max-md:text-[18px]">
                        The all-in-one film production platform. Scheduling, breakdowns, call sheets, budgets, and team collaboration—all in one place to plan, schedule, and execute your projects efficiently.
                    </p>
                    <motion.div
                        className="flex items-center justify-center gap-4 max-md:flex-col"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <a href="https://app.wrapshot.com" className="btn btn-primary shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all">
                            Start Your Production Free
                        </a>
                        <a href="#how-it-works" className="btn btn-outline">
                            See How It Works
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border/60 bg-white"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="aspect-[16/9] bg-zinc-900 relative group overflow-hidden">
                        <iframe
                            src="https://player.mux.com/5qO2F2AZ7Y7OvUXgdgp02AmhFmGnP6TeLR39twNdCwh8?autoplay=muted&loop=true&controls=false"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
