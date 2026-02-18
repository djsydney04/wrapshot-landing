"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-bg">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-[20px] border-b border-border">
                <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="font-serif text-xl font-medium">Wrapshot</Link>
                        <span className="text-text-muted">/</span>
                        <span className="text-sm font-medium">Privacy Policy</span>
                    </div>
                    <Link href="/" className="text-sm text-text-secondary hover:text-text flex items-center gap-2">
                        <ArrowLeft size={16} />
                        <span className="max-md:hidden">Back to Home</span>
                    </Link>
                </div>
            </header>

            <main className="pt-[65px]">
                <div className="max-w-[800px] mx-auto px-6 py-12 lg:py-16">
                    {/* Hero */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="font-serif text-[48px] font-normal leading-[1.1] mb-4 max-md:text-[36px]">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            How we collect, use, and protect your information.
                        </p>
                        <p className="text-sm text-text-muted mt-4">Last updated: February 17, 2026</p>
                    </motion.div>

                    <div className="space-y-16">
                        <Section title="1. Introduction">
                            <p>
                                Wrapshot (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Wrapshot platform, including the website
                                at wrapshot.com and the application at app.wrapshot.com (collectively, the &quot;Service&quot;).
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you use our Service.
                            </p>
                            <p>
                                By using the Service, you agree to the collection and use of information in accordance
                                with this policy. If you do not agree with the terms of this Privacy Policy, please do
                                not access the Service.
                            </p>
                        </Section>

                        <Section title="2. Information We Collect">
                            <h3>Account Information</h3>
                            <p>When you create an account, we collect:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Password (stored in encrypted form)</li>
                                <li>Phone number (optional)</li>
                            </ul>

                            <h3>Production Data</h3>
                            <p>When you use the Service to manage productions, you may provide:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Project details (titles, descriptions, schedules)</li>
                                <li>Script files (PDF uploads)</li>
                                <li>Cast and crew information (names, contact details, roles, rates)</li>
                                <li>Location information and permit details</li>
                                <li>Budget and financial data, including uploaded receipts</li>
                                <li>Equipment and gear lists</li>
                            </ul>

                            <h3>Automatically Collected Information</h3>
                            <p>When you access our Service, we may automatically collect:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Device information (browser type, operating system)</li>
                                <li>IP address</li>
                                <li>Usage data (pages visited, features used, timestamps)</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </Section>

                        <Section title="3. How We Use Your Information">
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Provide, maintain, and improve the Service</li>
                                <li>Create and manage your account</li>
                                <li>Process script analysis, scene breakdowns, and scheduling</li>
                                <li>Enable real-time collaboration between team members</li>
                                <li>Generate call sheets, budget reports, and other production documents</li>
                                <li>Process receipt scanning and expense categorization</li>
                                <li>Send you service-related communications (e.g., account verification, updates)</li>
                                <li>Respond to your inquiries and support requests</li>
                                <li>Monitor and analyze usage trends to improve user experience</li>
                                <li>Detect, prevent, and address technical issues or security threats</li>
                            </ul>
                        </Section>

                        <Section title="4. Data Sharing and Disclosure">
                            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>

                            <h3>Team Collaboration</h3>
                            <p>
                                When you invite team members to a project, they will have access to project data based on
                                their assigned role (Admin, Coordinator, Department Head, Crew, Cast, or Viewer).
                            </p>

                            <h3>Service Providers</h3>
                            <p>
                                We use third-party services to help operate our platform. These providers only have access
                                to your information as necessary to perform their functions and are obligated to maintain
                                its confidentiality. Our key service providers include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Supabase</strong> — Database hosting and user authentication</li>
                                <li><strong>Mux</strong> — Video hosting and playback</li>
                            </ul>

                            <h3>Legal Requirements</h3>
                            <p>
                                We may disclose your information if required to do so by law or in response to valid
                                requests by public authorities (e.g., a court or government agency).
                            </p>

                            <h3>Business Transfers</h3>
                            <p>
                                If Wrapshot is involved in a merger, acquisition, or sale of assets, your information
                                may be transferred as part of that transaction. We will notify you before your information
                                becomes subject to a different privacy policy.
                            </p>
                        </Section>

                        <Section title="5. Data Security">
                            <p>
                                We take the security of your data seriously. All data is encrypted in transit using TLS
                                and at rest using industry-standard encryption. We implement appropriate technical and
                                organizational measures to protect your personal information against unauthorized access,
                                alteration, disclosure, or destruction.
                            </p>
                            <p>
                                However, no method of transmission over the internet or electronic storage is 100% secure.
                                While we strive to use commercially acceptable means to protect your information, we cannot
                                guarantee its absolute security.
                            </p>
                        </Section>

                        <Section title="6. Data Retention">
                            <p>
                                We retain your personal information for as long as your account is active or as needed to
                                provide you with the Service. If you delete your account, we will delete or anonymize your
                                personal information within 30 days, except where we are required to retain it for legal
                                or regulatory purposes.
                            </p>
                            <p>
                                Production data associated with shared projects may be retained as long as other project
                                members maintain active accounts, though your personal information will be disassociated
                                from it.
                            </p>
                        </Section>

                        <Section title="7. Your Rights">
                            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Access</strong> — Request a copy of the personal information we hold about you</li>
                                <li><strong>Correction</strong> — Request that we correct inaccurate or incomplete information</li>
                                <li><strong>Deletion</strong> — Request that we delete your personal information</li>
                                <li><strong>Portability</strong> — Request a copy of your data in a structured, machine-readable format</li>
                                <li><strong>Objection</strong> — Object to the processing of your personal information</li>
                                <li><strong>Restriction</strong> — Request that we restrict the processing of your information</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us at{" "}
                                <a href="mailto:support@wrapshot.com" className="text-text font-medium hover:underline">support@wrapshot.com</a>.
                                We will respond to your request within 30 days.
                            </p>
                        </Section>

                        <Section title="8. Cookies">
                            <p>
                                We use cookies and similar tracking technologies to track activity on our Service and
                                hold certain information. Cookies are files with a small amount of data that are sent to
                                your browser from a website and stored on your device.
                            </p>
                            <p>We use the following types of cookies:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Essential Cookies</strong> — Required for the Service to function (e.g., authentication)</li>
                                <li><strong>Preference Cookies</strong> — Remember your settings and preferences</li>
                                <li><strong>Analytics Cookies</strong> — Help us understand how the Service is used</li>
                            </ul>
                            <p>
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                                sent. However, if you do not accept cookies, you may not be able to use some parts of the Service.
                            </p>
                        </Section>

                        <Section title="9. Children's Privacy">
                            <p>
                                Our Service is not directed to anyone under the age of 16. We do not knowingly collect
                                personal information from children under 16. If you are a parent or guardian and you are
                                aware that your child has provided us with personal information, please contact us so that
                                we can take necessary actions.
                            </p>
                        </Section>

                        <Section title="10. Changes to This Policy">
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes
                                by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                                For significant changes, we will provide a more prominent notice (such as an email
                                notification).
                            </p>
                            <p>
                                You are advised to review this Privacy Policy periodically for any changes. Changes to
                                this Privacy Policy are effective when they are posted on this page.
                            </p>
                        </Section>

                        <Section title="11. Contact Us">
                            <p>If you have any questions about this Privacy Policy, please contact us:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Email: <a href="mailto:support@wrapshot.com" className="text-text font-medium hover:underline">support@wrapshot.com</a></li>
                                <li>General inquiries: <a href="mailto:hello@wrapshot.com" className="text-text font-medium hover:underline">hello@wrapshot.com</a></li>
                            </ul>
                        </Section>
                    </div>

                    <div className="mt-20 pt-12 border-t border-border flex gap-4 max-md:flex-col">
                        <Link href="/terms" className="btn btn-outline">
                            Terms of Service
                        </Link>
                        <Link href="/" className="btn btn-primary">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

function Section({ title, children }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <motion.section
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="font-serif text-[28px] font-normal mb-6">{title}</h2>
            <div className="prose-custom">
                {children}
            </div>
        </motion.section>
    );
}
