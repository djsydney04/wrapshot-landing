"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-section border-t border-border">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="text-center max-w-[560px] mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-serif text-[40px] font-normal leading-[1.15] mb-4 max-md:text-[32px]">
                        Ready to start your production?
                    </h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Free for your first project. No credit card required.
                    </p>
                    <div className="flex items-center justify-center gap-4 max-md:flex-col">
                        <a href="https://app.wrapshoot.com" className="btn btn-primary">
                            Start Your Production Free
                        </a>
                        <a href="mailto:hello@wrapshoot.com" className="btn btn-outline">
                            Talk to Sales
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
