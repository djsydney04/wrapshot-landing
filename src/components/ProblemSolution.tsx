"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
    return (
        <section className="py-section pt-20">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="grid grid-cols-12 gap-8 items-start"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="col-span-4 max-lg:col-span-12">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-text-muted mb-4">Why Wrapshoot</p>
                        <h2 className="font-serif text-[34px] font-normal leading-[1.15] max-w-[280px] max-lg:max-w-none max-md:text-[30px]">
                            One system, prep through wrap.
                        </h2>
                    </div>
                    <div className="col-span-8 max-lg:col-span-12">
                        <p className="text-xl leading-relaxed text-text-secondary max-md:text-[18px]">
                            Stripeboard, breakdowns, call sheets, budgets, and crew coordination
                            in a single workspace. Changes propagate across every department automatically,
                            so your schedule, budget, and call sheets always reflect the same data.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
