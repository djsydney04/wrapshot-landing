"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import posthog from "posthog-js";

const tiers = [
    {
        name: "Free",
        price: "$0",
        note: "forever",
        description: "One project, core features, no time limit.",
        features: [
            "1 project",
            "Basic scene management",
            "Up to 3 team members",
            "Community support",
        ],
        cta: "Start Free",
        primary: false,
    },
    {
        name: "Pro",
        price: "$49",
        note: "/month",
        description: "Full platform. Unlimited projects and crew.",
        features: [
            "Unlimited projects",
            "Full script analysis",
            "Unlimited team members",
            "Budget tracking",
            "Call sheet generation",
            "Priority support",
        ],
        cta: "Get Started",
        primary: true,
    },
    {
        name: "Studio",
        price: "Custom",
        note: "contact us",
        description: "Multi-production pipelines and custom integrations.",
        features: [
            "Everything in Pro",
            "Advanced analytics",
            "Custom integrations",
            "Dedicated account manager",
            "White-label options",
        ],
        cta: "Talk to Sales",
        primary: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-section">
            <div className="max-w-container mx-auto px-12">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">Pricing</p>
                    <h2 className="font-serif text-[40px] font-normal leading-[1.15] max-md:text-[32px]">
                        Start free,<br />
                        <em className="italic">upgrade when ready.</em>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 border-y border-border/80 max-lg:grid-cols-1">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            className={`flex flex-col p-8 ${i > 0 ? "border-l border-border/80 max-lg:border-l-0 max-lg:border-t" : ""} ${tier.primary ? "bg-[#f9f9f8]" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-sm font-medium mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1.5 mb-2">
                                    <span className="font-serif text-4xl font-normal">{tier.price}</span>
                                    <span className="text-[13px] text-text-muted">{tier.note}</span>
                                </div>
                                <p className="text-sm text-text-secondary">{tier.description}</p>
                            </div>
                            <ul className="flex-1 mb-7 space-y-3">
                                {tier.features.map((f, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                                        <Check size={16} className="text-text mt-0.5 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tier.name === "Studio" ? "mailto:hello@wrapshoot.com" : "https://app.wrapshoot.com"}
                                className={`btn block text-center !px-3 !py-3 !text-sm ${tier.primary
                                        ? "btn-primary"
                                        : "btn-outline"
                                    }`}
                                onClick={() => posthog.capture("pricing_cta_clicked", { plan: tier.name, label: tier.cta })}
                            >
                                {tier.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Comparison */}
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-medium mb-8 text-center">Compare Plans</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-y border-border/80">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left text-sm font-medium p-4">Feature</th>
                                    <th className="text-center text-sm font-medium p-4">Free</th>
                                    <th className="text-center text-sm font-medium p-4 bg-zinc-100/50">Pro</th>
                                    <th className="text-center text-sm font-medium p-4">Studio</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-border">
                                    <td className="p-4 text-text-secondary">Projects</td>
                                    <td className="p-4 text-center">1</td>
                                    <td className="p-4 text-center bg-zinc-100/50">Unlimited</td>
                                    <td className="p-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-4 text-text-secondary">Script Analysis</td>
                                    <td className="p-4 text-center">Limited</td>
                                    <td className="p-4 text-center bg-zinc-100/50">Full</td>
                                    <td className="p-4 text-center">Full</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-4 text-text-secondary">Team Members</td>
                                    <td className="p-4 text-center">3</td>
                                    <td className="p-4 text-center bg-zinc-100/50">Unlimited</td>
                                    <td className="p-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-4 text-text-secondary">Scene Breakdown</td>
                                    <td className="p-4 text-center">Basic</td>
                                    <td className="p-4 text-center bg-zinc-100/50">Full</td>
                                    <td className="p-4 text-center">Full</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-4 text-text-secondary">Budget Tracking</td>
                                    <td className="p-4 text-center text-text-muted">—</td>
                                    <td className="p-4 text-center bg-zinc-100/50"><Check size={16} className="inline" /></td>
                                    <td className="p-4 text-center"><Check size={16} className="inline" /></td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-4 text-text-secondary">Call Sheets</td>
                                    <td className="p-4 text-center text-text-muted">—</td>
                                    <td className="p-4 text-center bg-zinc-100/50"><Check size={16} className="inline" /></td>
                                    <td className="p-4 text-center"><Check size={16} className="inline" /></td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-4 text-text-secondary">Analytics</td>
                                    <td className="p-4 text-center text-text-muted">—</td>
                                    <td className="p-4 text-center bg-zinc-100/50">Basic</td>
                                    <td className="p-4 text-center">Advanced</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-text-secondary">Support</td>
                                    <td className="p-4 text-center">Community</td>
                                    <td className="p-4 text-center bg-zinc-100/50">Priority</td>
                                    <td className="p-4 text-center">Dedicated</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
