"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialProof() {
    return (
        <section className="py-16">
            <motion.div
                className="max-w-container mx-auto px-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-xs uppercase tracking-wider text-text-muted mb-6">Used by students at</p>
                <div className="flex flex-col items-center gap-2">
                    <Image
                        src="/chapman-university.svg"
                        alt="Chapman University"
                        width={220}
                        height={23}
                        className="opacity-50"
                    />
                    <span className="text-sm text-text-muted">Dodge College of Film and Media Arts</span>
                </div>
            </motion.div>
        </section>
    );
}
