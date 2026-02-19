"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-bg">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-[20px] border-b border-border">
                <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="font-serif text-xl font-medium">Wrapshoot</Link>
                        <span className="text-text-muted">/</span>
                        <span className="text-sm font-medium">Terms of Service</span>
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
                            Terms of Service
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            The terms and conditions governing your use of Wrapshoot.
                        </p>
                        <p className="text-sm text-text-muted mt-4">Last updated: February 17, 2026</p>
                    </motion.div>

                    <div className="space-y-16">
                        <Section title="1. Acceptance of Terms">
                            <p>
                                By accessing or using the Wrapshoot platform, including the website at wrapshoot.com and
                                the application at app.wrapshoot.com (collectively, the &quot;Service&quot;), you agree to be bound
                                by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not
                                access or use the Service.
                            </p>
                            <p>
                                These Terms constitute a legally binding agreement between you and Wrapshoot (&quot;we,&quot; &quot;our,&quot;
                                or &quot;us&quot;). We may update these Terms from time to time. Continued use of the Service after
                                changes constitutes acceptance of the revised Terms.
                            </p>
                        </Section>

                        <Section title="2. Description of Service">
                            <p>
                                Wrapshoot is a film production management platform that provides tools for script analysis,
                                scene scheduling, cast and crew management, budgeting, location tracking, and team
                                collaboration. The Service is designed for indie filmmakers, production teams, and film
                                production professionals.
                            </p>
                        </Section>

                        <Section title="3. Account Registration">
                            <p>To use certain features of the Service, you must create an account. You agree to:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Provide accurate, current, and complete information during registration</li>
                                <li>Maintain and promptly update your account information</li>
                                <li>Keep your password secure and confidential</li>
                                <li>Accept responsibility for all activity that occurs under your account</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                            </ul>
                            <p>
                                You must be at least 16 years old to create an account. By creating an account, you
                                represent that you are at least 16 years of age.
                            </p>
                        </Section>

                        <Section title="4. Subscription Plans and Payments">
                            <h3>Plans</h3>
                            <p>Wrapshoot offers the following subscription tiers:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Free</strong> — Limited to 1 project and up to 3 team members</li>
                                <li><strong>Pro</strong> — $49/month with unlimited projects and full feature access</li>
                                <li><strong>Studio</strong> — Custom pricing for enterprise needs</li>
                            </ul>

                            <h3>Billing</h3>
                            <p>
                                Paid subscriptions are billed on a recurring monthly basis. You authorize us to charge
                                your payment method on each billing date. All fees are quoted in US dollars unless
                                otherwise stated.
                            </p>

                            <h3>Cancellation</h3>
                            <p>
                                You may cancel your subscription at any time through your account settings. Cancellation
                                takes effect at the end of your current billing period. You will retain access to paid
                                features until the end of the period you have already paid for. No refunds will be
                                issued for partial billing periods.
                            </p>

                            <h3>Price Changes</h3>
                            <p>
                                We reserve the right to change our subscription pricing. We will provide at least 30 days&apos;
                                notice before any price increase takes effect. Continued use of the Service after a price
                                change constitutes acceptance of the new pricing.
                            </p>
                        </Section>

                        <Section title="5. Your Content">
                            <h3>Ownership</h3>
                            <p>
                                You retain all ownership rights to the content you upload, create, or store through the
                                Service (&quot;Your Content&quot;). This includes scripts, production data, cast and crew
                                information, budgets, schedules, and any other materials you provide.
                            </p>

                            <h3>License to Wrapshoot</h3>
                            <p>
                                By uploading Your Content to the Service, you grant us a limited, non-exclusive,
                                worldwide license to use, store, process, and display Your Content solely for the
                                purpose of operating and providing the Service to you. This license terminates when
                                you delete Your Content or your account.
                            </p>

                            <h3>Responsibility</h3>
                            <p>
                                You are solely responsible for Your Content and represent that you have all necessary
                                rights to upload and share it through the Service. You must not upload content that
                                infringes on any third party&apos;s intellectual property or other rights.
                            </p>
                        </Section>

                        <Section title="6. Team Collaboration">
                            <p>
                                When you invite team members to a project, you are granting them access to project data
                                based on the role you assign (Admin, Coordinator, Department Head, Crew, Cast, or Viewer).
                                You are responsible for managing team member access and ensuring that appropriate
                                permissions are set.
                            </p>
                            <p>
                                Project owners and administrators are responsible for the actions of team members within
                                their projects. We recommend using the most restrictive role necessary for each team member.
                            </p>
                        </Section>

                        <Section title="7. Acceptable Use">
                            <p>You agree not to use the Service to:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on the intellectual property rights of others</li>
                                <li>Upload malicious code, viruses, or harmful content</li>
                                <li>Attempt to gain unauthorized access to the Service or other users&apos; accounts</li>
                                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                                <li>Use the Service for any purpose other than film and media production management</li>
                                <li>Scrape, crawl, or use automated means to access the Service without our consent</li>
                                <li>Resell or redistribute the Service without our written permission</li>
                            </ul>
                            <p>
                                We reserve the right to suspend or terminate accounts that violate these terms at
                                our sole discretion.
                            </p>
                        </Section>

                        <Section title="8. Intellectual Property">
                            <p>
                                The Service, including its design, features, code, documentation, and branding, is owned
                                by Wrapshoot and protected by intellectual property laws. Nothing in these Terms grants you
                                any right, title, or interest in the Service beyond the limited right to use it in
                                accordance with these Terms.
                            </p>
                            <p>
                                The Wrapshoot name, logo, and all related marks are trademarks of Wrapshoot. You may not
                                use our trademarks without our prior written permission.
                            </p>
                        </Section>

                        <Section title="9. Disclaimers">
                            <p>
                                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                            <p>
                                We do not warrant that the Service will be uninterrupted, error-free, or secure. Script
                                analysis, scheduling suggestions, and other automated features are provided as tools to
                                assist your production workflow and should be reviewed for accuracy. We are not responsible
                                for production decisions made based on data processed by the Service.
                            </p>
                        </Section>

                        <Section title="10. Limitation of Liability">
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WRAPSHOT SHALL NOT BE LIABLE FOR ANY INDIRECT,
                                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
                                LOSS OF PROFITS, DATA, OR PRODUCTION DELAYS, WHETHER ARISING FROM CONTRACT, TORT, OR
                                OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                            </p>
                            <p>
                                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT
                                EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                            </p>
                        </Section>

                        <Section title="11. Indemnification">
                            <p>
                                You agree to indemnify, defend, and hold harmless Wrapshoot and its officers, directors,
                                employees, and agents from any claims, damages, losses, liabilities, and expenses
                                (including reasonable attorneys&apos; fees) arising from your use of the Service, your
                                violation of these Terms, or your violation of any rights of a third party.
                            </p>
                        </Section>

                        <Section title="12. Termination">
                            <p>
                                We may suspend or terminate your access to the Service at any time for any reason,
                                including violation of these Terms, with or without notice. Upon termination:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Your right to use the Service will immediately cease</li>
                                <li>We may delete your account and data after a reasonable retention period</li>
                                <li>You may request an export of your data before termination takes effect</li>
                                <li>Provisions that by their nature should survive termination will remain in effect</li>
                            </ul>
                            <p>
                                You may terminate your account at any time by contacting us or through your account
                                settings.
                            </p>
                        </Section>

                        <Section title="13. Governing Law">
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the
                                State of California, without regard to its conflict of law provisions. Any legal action
                                or proceeding arising under these Terms will be brought exclusively in the courts
                                located in Los Angeles County, California.
                            </p>
                        </Section>

                        <Section title="14. General Provisions">
                            <h3>Entire Agreement</h3>
                            <p>
                                These Terms, together with the Privacy Policy, constitute the entire agreement between
                                you and Wrapshoot regarding your use of the Service.
                            </p>

                            <h3>Severability</h3>
                            <p>
                                If any provision of these Terms is found to be unenforceable, the remaining provisions
                                will continue in full force and effect.
                            </p>

                            <h3>Waiver</h3>
                            <p>
                                Our failure to enforce any right or provision of these Terms will not be considered a
                                waiver of that right or provision.
                            </p>

                            <h3>Assignment</h3>
                            <p>
                                You may not assign or transfer these Terms without our prior written consent. We may
                                assign our rights and obligations under these Terms without restriction.
                            </p>
                        </Section>

                        <Section title="15. Contact Us">
                            <p>If you have any questions about these Terms, please contact us:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Email: <a href="mailto:support@wrapshoot.com" className="text-text font-medium hover:underline">support@wrapshoot.com</a></li>
                                <li>General inquiries: <a href="mailto:hello@wrapshoot.com" className="text-text font-medium hover:underline">hello@wrapshoot.com</a></li>
                            </ul>
                        </Section>
                    </div>

                    <div className="mt-20 pt-12 border-t border-border flex gap-4 max-md:flex-col">
                        <Link href="/privacy" className="btn btn-outline">
                            Privacy Policy
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
