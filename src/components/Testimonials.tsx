"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "We cut our prep time in half. No more endless spreadsheet updates — everything just syncs.",
        author: "Sarah Chen",
        role: "1st AD",
        production: "Independent Feature",
    },
    {
        quote: "The call sheet feature alone is worth it. What used to take me 2 hours now takes 10 minutes.",
        author: "Marcus Johnson",
        role: "Line Producer",
        production: "Episodic TV",
    },
    {
        quote: "Finally, a scheduling tool that understands how productions actually work. Game changer.",
        author: "Emily Rodriguez",
        role: "Production Coordinator",
        production: "Commercial",
    },
];

export default function Testimonials() {
    return (
        <section className="py-section bg-bg-alt">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-serif text-[40px] font-normal">Loved by production teams</h2>
                </motion.div>
                <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white border border-border rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <p className="text-base leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center text-sm font-medium">
                                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{testimonial.author}</p>
                                    <p className="text-xs text-text-muted">
                                        {testimonial.role} · {testimonial.production}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
