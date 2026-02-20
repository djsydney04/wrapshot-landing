"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import posthog from "posthog-js";

const SURVEY_ID = "019c7c96-a3e5-0000-db20-207822659273";

const roles = ["Engineering", "GTM", "Design", "Content & community", "Something else"] as const;

export default function JobsPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "",
        portfolio: "",
        numberOne: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        posthog.capture("survey sent", {
            $survey_id: SURVEY_ID,
            $survey_response: form.name,
            $survey_response_1: form.email,
            $survey_response_2: form.role,
            $survey_response_3: form.portfolio,
            $survey_response_4: form.numberOne,
        });

        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen">
            {/* Nav */}
            <nav className="py-5 px-12 max-md:px-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Wrapshoot
                </Link>
            </nav>

            <div className="max-w-[640px] mx-auto px-12 max-md:px-6 pt-12 pb-32">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-xs uppercase tracking-[0.12em] text-text-muted mb-4">
                        Careers at Wrapshoot
                    </p>
                    <h1 className="font-serif text-[44px] font-normal leading-[1.1] mb-5 max-md:text-[34px]">
                        We hire exceptional people.
                    </h1>
                    <p className="text-lg text-text-secondary leading-relaxed mb-4">
                        We&apos;re building the next generation of software for
                        filmmakers. We don&apos;t have open roles listed — we have
                        open seats for people who are undeniably great at what they do.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                        If that sounds like you, introduce yourself below. We review
                        every submission and will reach out if there&apos;s a fit.
                    </p>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-border/70 my-12" />

                {/* Form or success */}
                {submitted ? (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <CheckCircle size={40} className="mx-auto mb-5 text-text-muted" />
                        <h2 className="font-serif text-[28px] font-normal mb-3">
                            We got it.
                        </h2>
                        <p className="text-text-secondary max-w-[400px] mx-auto">
                            Thanks for reaching out. If there&apos;s a match, we&apos;ll
                            be in touch. No auto-reply — just a real conversation if
                            the fit is right.
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="space-y-6"
                    >
                        {/* Q1: Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                What&apos;s your name?
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:border-text/30 transition-colors"
                            />
                        </div>

                        {/* Q2: Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                What&apos;s your email?
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:border-text/30 transition-colors"
                            />
                        </div>

                        {/* Q3: What do you do best? */}
                        <div>
                            <label
                                htmlFor="role"
                                className="block text-sm font-medium mb-2"
                            >
                                What do you do best?
                            </label>
                            <select
                                id="role"
                                name="role"
                                required
                                value={form.role}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:border-text/30 transition-colors appearance-none"
                            >
                                <option value="" disabled>
                                    Select a discipline
                                </option>
                                {roles.map((role) => (
                                    <option key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Q4: Link to your work */}
                        <div>
                            <label
                                htmlFor="portfolio"
                                className="block text-sm font-medium mb-2"
                            >
                                Link to your work{" "}
                                <span className="text-text-muted font-normal">
                                    (portfolio, GitHub, Twitter, etc.)
                                </span>
                            </label>
                            <input
                                id="portfolio"
                                name="portfolio"
                                type="url"
                                value={form.portfolio}
                                onChange={handleChange}
                                placeholder="https://"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:border-text/30 transition-colors"
                            />
                        </div>

                        {/* Q5: What are you #1 in the world at? */}
                        <div>
                            <label
                                htmlFor="numberOne"
                                className="block text-sm font-medium mb-2"
                            >
                                What are you #1 in the world at?
                            </label>
                            <textarea
                                id="numberOne"
                                name="numberOne"
                                required
                                rows={4}
                                value={form.numberOne}
                                onChange={handleChange}
                                placeholder="Tell us the thing you're better at than almost anyone."
                                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm outline-none focus:border-text/30 transition-colors resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-full disabled:opacity-60"
                        >
                            {loading ? (
                                "Sending..."
                            ) : (
                                <>
                                    Submit
                                    <Send size={15} />
                                </>
                            )}
                        </button>

                        <p className="text-xs text-text-muted text-center pt-2">
                            We read every submission. No bots, no black holes.
                        </p>
                    </motion.form>
                )}
            </div>
        </div>
    );
}
