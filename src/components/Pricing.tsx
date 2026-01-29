"use client";

import { motion } from "framer-motion";

const tiers = [
    {
        name: "Free",
        price: "$0",
        note: "forever",
        features: ["1 project", "Up to 5 team members", "Basic call sheets", "Script management"],
        cta: "Get Started",
        primary: false,
    },
    {
        name: "Pro",
        price: "$49",
        note: "/month",
        features: ["Unlimited projects", "Unlimited team", "Advanced call sheets", "Day-out-of-days", "Crew notifications"],
        cta: "Get Started",
        primary: true,
    },
    {
        name: "Studio",
        price: "Custom",
        note: "contact us",
        features: ["Everything in Pro", "SSO & security", "Dedicated support", "Priority onboarding"],
        cta: "Contact",
        primary: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-section bg-bg-alt">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">Pricing</p>
                    <h2 className="font-serif text-[40px] font-normal leading-[1.15]">
                        Start free,<br />
                        <em className="italic">upgrade when ready.</em>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:max-w-[400px]">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            className={`flex flex-col p-8 bg-white border rounded-xl ${tier.primary ? "border-text" : "border-border"
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="mb-7">
                                <h3 className="text-sm font-medium mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-serif text-4xl font-normal">{tier.price}</span>
                                    <span className="text-[13px] text-text-muted">{tier.note}</span>
                                </div>
                            </div>
                            <ul className="flex-1 mb-7">
                                {tier.features.map((f, j) => (
                                    <li key={j} className="text-sm text-text-secondary py-2 border-b border-border last:border-b-0">{f}</li>
                                ))}
                            </ul>
                            <a
                                href="https://app.wrapshoot.com"
                                className={`block text-center px-3 py-3 text-sm font-medium border rounded-md transition-all duration-200 ${tier.primary
                                        ? "bg-text text-white border-text hover:opacity-90"
                                        : "border-border hover:border-text"
                                    }`}
                            >
                                {tier.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
