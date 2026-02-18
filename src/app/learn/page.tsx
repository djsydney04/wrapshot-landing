"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ChevronRight,
    Menu,
    X,
    ArrowLeft,
} from "lucide-react";

const sections = [
    { id: "getting-started", title: "Getting Started" },
    { id: "creating-project", title: "Creating Your First Project" },
    { id: "script-analysis", title: "Uploading & Analyzing Scripts" },
    { id: "managing-scenes", title: "Managing Scenes" },
    { id: "cast", title: "Building Your Cast" },
    { id: "crew", title: "Organizing Your Crew" },
    { id: "scheduling", title: "Scheduling & Stripeboard" },
    { id: "breakdown", title: "Scene Breakdown" },
    { id: "budget", title: "Budget & Finance" },
    { id: "locations", title: "Locations" },
    { id: "gear", title: "Gear & Equipment" },
    { id: "collaboration", title: "Team Collaboration" },
    { id: "tips", title: "Tips & Best Practices" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "changelog", title: "Changelog" },
];

export default function LearnPage() {
    const [activeSection, setActiveSection] = useState("getting-started");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
        );

        const sectionElements = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
        sectionElements.forEach((el) => observerRef.current?.observe(el!));

        return () => observerRef.current?.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="min-h-screen bg-bg">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-[20px] border-b border-border">
                <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="font-serif text-xl font-medium">Wrapshot</Link>
                        <span className="text-text-muted">/</span>
                        <span className="text-sm font-medium">User Guide</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-sm text-text-secondary hover:text-text flex items-center gap-2">
                            <ArrowLeft size={16} />
                            <span className="max-md:hidden">Back to Home</span>
                        </Link>
                        <button
                            className="lg:hidden p-2 -mr-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex pt-[65px]">
                {/* Sidebar - Desktop */}
                <aside className="hidden lg:block w-[280px] flex-shrink-0 border-r border-border h-[calc(100vh-65px)] sticky top-[65px] overflow-y-auto">
                    <nav className="p-6">
                        <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">User Guide</p>
                        <ul className="space-y-1">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => scrollToSection(section.id)}
                                        className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors ${activeSection === section.id
                                            ? "bg-text text-white"
                                            : "text-text-secondary hover:bg-bg-alt hover:text-text"
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        className="lg:hidden fixed inset-0 top-[65px] bg-bg z-40 overflow-y-auto"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <nav className="p-6">
                            <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4">User Guide</p>
                            <ul className="space-y-1">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full flex items-center px-3 py-3 rounded-lg text-base transition-colors ${activeSection === section.id
                                                ? "bg-text text-white"
                                                : "text-text-secondary hover:bg-bg-alt hover:text-text"
                                                }`}
                                        >
                                            {section.title}
                                            <ChevronRight size={16} className="ml-auto" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}

                {/* Main Content */}
                <main className="flex-1 min-w-0">
                    <div className="max-w-[800px] mx-auto px-6 py-12 lg:py-16">
                        {/* Hero */}
                        <motion.div
                            className="mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="font-serif text-[48px] font-normal leading-[1.1] mb-4 max-md:text-[36px]">
                                Wrapshot User Guide
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Your complete guide to managing film productions with Wrapshot.
                                From your first project to wrapping your shoot—we&apos;ve got you covered.
                            </p>
                        </motion.div>

                        {/* Getting Started */}
                        <Section id="getting-started" title="Getting Started">
                            <h3>Creating Your Account</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Visit the Wrapshot website and click <strong>Sign Up</strong></li>
                                <li>Enter your email address and create a password</li>
                                <li>Verify your email by clicking the link sent to your inbox</li>
                                <li>Complete your profile with your name and optional phone number</li>
                            </ol>

                            <h3>Navigating the Dashboard</h3>
                            <p>
                                After logging in, you&apos;ll see your <strong>Projects Dashboard</strong> showing all your
                                projects with their current status, quick-start recommendations, and upcoming shooting days.
                            </p>
                        </Section>

                        {/* Creating Your First Project */}
                        <Section id="creating-project" title="Creating Your First Project">
                            <h3>Step 1: Click &quot;New Project&quot;</h3>
                            <p>From your dashboard, click the <strong>New Project</strong> button in the top right corner.</p>

                            <h3>Step 2: Enter Project Details</h3>
                            <p>Fill in your project information:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Project Name</strong> — Your film&apos;s working title</li>
                                <li><strong>Description</strong> — A brief synopsis (optional)</li>
                                <li><strong>Status</strong> — Development, Pre-Production, Production, or Post-Production</li>
                            </ul>

                            <h3>Step 3: Setup Wizard</h3>
                            <p>
                                When you create a new project, Wrapshot offers a guided <strong>Setup Wizard</strong> to help you
                                upload your script, add shooting days, cast members, and crew. You can skip any step and complete it later.
                            </p>
                        </Section>

                        {/* Script Analysis */}
                        <Section id="script-analysis" title="Uploading & Analyzing Scripts">
                            <div className="bg-bg-alt border border-border rounded-xl p-6 mb-8">
                                <h4 className="font-medium mb-2">
                                    How Script Analysis Works
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Upload your script PDF and Wrapshot will automatically extract scenes, identify INT/EXT and
                                    DAY/NIGHT, detect production elements like props and wardrobe, generate synopses, and estimate shooting times. No manual data entry required.
                                </p>
                            </div>

                            <h3>Uploading Your Script</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Navigate to your project</li>
                                <li>Go to the <strong>Script</strong> section in the sidebar</li>
                                <li>Click <strong>Upload Script</strong> or drag-and-drop your PDF</li>
                                <li>Wrapshot will automatically begin analysis</li>
                            </ol>

                            <h3>Reviewing Results</h3>
                            <p>After analysis completes:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Review extracted scenes in the <strong>Scenes</strong> section</li>
                                <li>Check the <strong>Scene Breakdown</strong> for detected elements</li>
                                <li>Accept or dismiss suggestions as needed</li>
                                <li>Make manual adjustments where necessary</li>
                            </ul>

                            <h3>Script Versions</h3>
                            <p>
                                Keep track of revisions by uploading new script versions. Each version is color-coded
                                (White, Blue, Pink, Yellow, etc.) following industry standards. Compare versions to see
                                what changed, and always know which draft everyone is working from.
                            </p>
                        </Section>

                        {/* Managing Scenes */}
                        <Section id="managing-scenes" title="Managing Scenes">
                            <h3>Viewing Scenes</h3>
                            <p>Access scenes through the <strong>Scenes</strong> section. Choose your preferred view:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Grid View</strong> — Visual cards showing scene thumbnails</li>
                                <li><strong>Kanban View</strong> — Organized by status (Not Scheduled, In Progress, Completed)</li>
                                <li><strong>Timeline View</strong> — Gantt chart showing schedule</li>
                                <li><strong>List View</strong> — Detailed table format</li>
                            </ul>

                            <h3>Adding Scenes Manually</h3>
                            <p>If you&apos;re not using automatic analysis, add scenes manually:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Click <strong>Add Scene</strong></li>
                                <li>Enter scene number, synopsis, INT/EXT, DAY/NIGHT, page count, and location</li>
                            </ol>

                            <h3>Scene Status</h3>
                            <p>Track progress with status labels:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Not Scheduled</strong> — Scene hasn&apos;t been assigned to a shooting day</li>
                                <li><strong>Scheduled</strong> — Scene is assigned but not shot</li>
                                <li><strong>In Progress</strong> — Currently shooting</li>
                                <li><strong>Completed</strong> — Scene is wrapped</li>
                            </ul>
                        </Section>

                        {/* Building Your Cast */}
                        <Section id="cast" title="Building Your Cast">
                            <h3>Adding Cast Members</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to the <strong>Cast</strong> section</li>
                                <li>Click <strong>Add Cast Member</strong></li>
                                <li>Enter character name, actor name, contact info, agent info (optional), and rates</li>
                            </ol>

                            <h3>Inviting Cast to the Project</h3>
                            <p>Send cast members access to their call sheets and schedules:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Click the <strong>Invite</strong> button on a cast member</li>
                                <li>Enter their email address</li>
                                <li>They&apos;ll receive an invitation link</li>
                                <li>Once accepted, they can view their schedule and call times</li>
                            </ol>

                            <h3>Cast Status</h3>
                            <p>Track each cast member&apos;s status:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>On Hold</strong> — Tentatively attached</li>
                                <li><strong>Confirmed</strong> — Deal closed</li>
                                <li><strong>Working</strong> — Currently in production</li>
                                <li><strong>Wrapped</strong> — Finished shooting</li>
                            </ul>
                        </Section>

                        {/* Organizing Your Crew */}
                        <Section id="crew" title="Organizing Your Crew">
                            <h3>Adding Crew Members</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to the <strong>Crew</strong> section</li>
                                <li>Click <strong>Add Crew Member</strong></li>
                                <li>Enter name, role/position, department, contact info, and rate</li>
                            </ol>

                            <h3>Departments</h3>
                            <p>Crew members are organized by department:</p>
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {["Production", "Camera", "Lighting", "Sound", "Art Department", "Costume",
                                    "Makeup/Hair", "Props", "Grip", "Electric", "Special Effects", "Stunts",
                                    "Locations", "Transportation"].map((dept) => (
                                        <span key={dept} className="text-sm text-text-secondary">{dept}</span>
                                    ))}
                            </div>

                            <h3>Department Heads</h3>
                            <p>
                                Designate department heads by checking the <strong>Department Head</strong> option
                                when adding or editing a crew member. Department heads may have additional permissions.
                            </p>
                        </Section>

                        {/* Scheduling & Stripeboard */}
                        <Section id="scheduling" title="Scheduling & Stripeboard">
                            <h3>Understanding the Stripeboard</h3>
                            <p>
                                The stripeboard is the traditional film scheduling tool, now digital. Each scene is
                                represented as a colored strip, color-coded by INT/EXT and DAY/NIGHT. Drag strips
                                to assign scenes to shooting days.
                            </p>

                            <h3>Creating Shooting Days</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to the <strong>Schedule</strong> section</li>
                                <li>Click <strong>Add Shooting Day</strong></li>
                                <li>Enter date, general call time, location (optional), and notes</li>
                            </ol>

                            <h3>Assigning Scenes to Days</h3>
                            <p><strong>Method 1: Drag and Drop</strong></p>
                            <p className="mb-4">Drag scene strips from the &quot;Unscheduled&quot; pool and drop them onto a shooting day.</p>

                            <p><strong>Method 2: Day Detail Panel</strong></p>
                            <p className="mb-6">Click on a shooting day, click <strong>Add Scene</strong>, and select scenes from the list.</p>

                            <h3>Setting Call Times</h3>
                            <p>For each shooting day, set specific call times:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>General Call</strong> — When most crew arrives</li>
                                <li><strong>Department Calls</strong> — Staggered times for different departments</li>
                                <li><strong>Cast Calls</strong> — Individual call times for each actor</li>
                            </ul>
                        </Section>

                        {/* Scene Breakdown */}
                        <Section id="breakdown" title="Scene Breakdown">
                            <h3>What is Scene Breakdown?</h3>
                            <p>
                                Scene breakdown identifies everything needed to shoot each scene: props, wardrobe,
                                vehicles, makeup/hair, special effects, background actors, special equipment, and more.
                            </p>

                            <h3>Using Auto-Generated Breakdowns</h3>
                            <p>If you used script analysis, many elements are pre-populated:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Open a scene&apos;s detail panel</li>
                                <li>Go to the <strong>Breakdown</strong> tab</li>
                                <li>Review suggested elements</li>
                                <li>Click <strong>Accept</strong> to confirm or <strong>Dismiss</strong> to remove</li>
                            </ol>

                            <h3>Element Categories</h3>
                            <p>Wrapshot supports 25+ breakdown categories:</p>
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {["Names & Character References", "Background/Extras", "Props", "Vehicles",
                                    "Wardrobe", "Makeup/Hair", "Camera", "Grip & Electric",
                                    "Sound & Music", "SFX (Practical)", "VFX (Visual)", "Mechanical Effects",
                                    "Art Department", "Set Dressing", "Greenery", "Special Equipment",
                                    "Animals", "Safety Notes", "Location Notes", "General Comments"].map((cat) => (
                                        <span key={cat} className="text-sm text-text-secondary">{cat}</span>
                                    ))}
                            </div>
                        </Section>

                        {/* Budget & Finance */}
                        <Section id="budget" title="Budget & Finance">
                            <h3>Creating a Budget</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to the <strong>Budget</strong> section</li>
                                <li>Click <strong>Create Budget</strong></li>
                                <li>Start from scratch or use a template (recommended)</li>
                            </ol>

                            <h3>Budget Structure</h3>
                            <p>Budgets are organized hierarchically:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Categories</strong> — e.g., &quot;Above the Line&quot;, &quot;Production&quot;, &quot;Post&quot;</li>
                                <li><strong>Subcategories</strong> — e.g., &quot;Camera Department&quot;, &quot;Lighting&quot;</li>
                                <li><strong>Line Items</strong> — e.g., &quot;Camera Operator - 10 days @ $500/day&quot;</li>
                            </ul>

                            <h3>Tracking Expenses</h3>
                            <p>Log actual spending against your budget:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Find the relevant line item</li>
                                <li>Click <strong>Add Expense</strong></li>
                                <li>Enter amount and date</li>
                                <li>Optionally upload a receipt</li>
                            </ol>

                            <h3>Receipt Scanning</h3>
                            <p>
                                Upload receipts and Wrapshot will attempt to extract the vendor name, amount, date,
                                and suggested category automatically.
                            </p>

                            <h3>Budget Health</h3>
                            <p>Monitor your budget status:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><span className="text-green-600 font-medium">Under Budget</span> — Spending less than estimated</li>
                                <li><span className="text-yellow-600 font-medium">On Track</span> — Close to estimates</li>
                                <li><span className="text-red-600 font-medium">Over Budget</span> — Exceeding estimates</li>
                            </ul>
                        </Section>

                        {/* Locations */}
                        <Section id="locations" title="Locations">
                            <h3>Adding Locations</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to the <strong>Locations</strong> section</li>
                                <li>Click <strong>Add Location</strong></li>
                                <li>Enter location name, address, type (Practical, Studio, Backlot, Virtual), and INT/EXT capability</li>
                            </ol>

                            <h3>Permit Tracking</h3>
                            <p>Track permit status for each location:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Not Started</strong> — Haven&apos;t applied yet</li>
                                <li><strong>Applied</strong> — Application submitted</li>
                                <li><strong>Approved</strong> — Permit granted</li>
                                <li><strong>Denied</strong> — Need alternative</li>
                            </ul>

                            <h3>Location Notes</h3>
                            <p>Add important notes about each location: parking availability, load-in instructions,
                                power availability, sound considerations, and contact person.</p>
                        </Section>

                        {/* Gear & Equipment */}
                        <Section id="gear" title="Gear & Equipment">
                            <h3>Managing Equipment</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to the <strong>Gear</strong> section</li>
                                <li>Click <strong>Add Equipment</strong></li>
                                <li>Enter item name, category, department responsible, and notes/specifications</li>
                            </ol>

                            <h3>Equipment Categories</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Camera</strong> — cameras, lenses, accessories</li>
                                <li><strong>Lighting</strong> — lights, stands, modifiers</li>
                                <li><strong>Sound</strong> — mics, recorders, playback</li>
                                <li><strong>Art</strong> — set dec, props</li>
                                <li><strong>Costume & Props</strong></li>
                                <li><strong>Vehicles & Special Equipment</strong></li>
                            </ul>

                            <h3>Scene-Based Gear</h3>
                            <p>
                                Track which equipment is needed for specific scenes. Open a scene&apos;s detail panel,
                                go to the <strong>Gear</strong> tab, and select required equipment.
                            </p>
                        </Section>

                        {/* Team Collaboration */}
                        <Section id="collaboration" title="Team Collaboration">
                            <h3>Sharing Your Project</h3>
                            <p>Invite team members to collaborate:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Click the <strong>Share</strong> button in the project header</li>
                                <li>Enter email addresses</li>
                                <li>Select their role</li>
                            </ol>

                            <h3>Team Roles</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Admin</strong> — Full access to everything</li>
                                <li><strong>Coordinator</strong> — Manage schedule and scenes</li>
                                <li><strong>Department Head</strong> — Access to their department</li>
                                <li><strong>Crew</strong> — View schedules and assignments</li>
                                <li><strong>Cast</strong> — View call sheets only</li>
                                <li><strong>Viewer</strong> — Read-only access</li>
                            </ul>

                            <h3>Managing Team Access</h3>
                            <p>
                                View and manage team members in <strong>Settings &gt; Team</strong>. See all team members
                                and their roles, change permissions, remove access, or resend invitations.
                            </p>

                            <h3>Real-Time Collaboration</h3>
                            <p>
                                Changes sync in real-time across all team members. When someone updates a scene
                                or schedule, you&apos;ll see it immediately.
                            </p>
                        </Section>

                        {/* Tips & Best Practices */}
                        <Section id="tips" title="Tips & Best Practices">
                            <h3>Getting the Most from Script Analysis</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Upload clean, well-formatted PDFs</li>
                                <li>Standard screenplay format works best</li>
                                <li>Review suggestions carefully—they&apos;re helpful but not perfect</li>
                                <li>Use analysis as a starting point, then refine manually</li>
                            </ul>

                            <h3>Efficient Scheduling</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Break down your script before scheduling</li>
                                <li>Know your cast availability before assigning days</li>
                                <li>Group scenes by location to minimize company moves</li>
                                <li>Consider day/night requirements</li>
                            </ul>

                            <h3>Budget Management</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Create your budget early in pre-production</li>
                                <li>Update actuals regularly</li>
                                <li>Review budget health weekly</li>
                                <li>Keep receipts organized by uploading them promptly</li>
                            </ul>

                            <h3>Team Communication</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Use specific roles to limit access appropriately</li>
                                <li>Invite department heads first to help build out their teams</li>
                                <li>Keep call times updated—your team relies on them</li>
                            </ul>

                            <h3>Keyboard Shortcuts</h3>
                            <p>Speed up your workflow:</p>
                            <div className="bg-bg-alt border border-border rounded-xl p-4 mb-6">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div><kbd className="px-2 py-1 bg-white border border-border rounded text-xs">Cmd/Ctrl + K</kbd> <span className="text-text-secondary ml-2">Command palette</span></div>
                                    <div><kbd className="px-2 py-1 bg-white border border-border rounded text-xs">Cmd/Ctrl + S</kbd> <span className="text-text-secondary ml-2">Save changes</span></div>
                                    <div><kbd className="px-2 py-1 bg-white border border-border rounded text-xs">Arrow keys</kbd> <span className="text-text-secondary ml-2">Navigate items</span></div>
                                    <div><kbd className="px-2 py-1 bg-white border border-border rounded text-xs">Enter</kbd> <span className="text-text-secondary ml-2">Open selected</span></div>
                                    <div><kbd className="px-2 py-1 bg-white border border-border rounded text-xs">Escape</kbd> <span className="text-text-secondary ml-2">Close panels</span></div>
                                </div>
                            </div>
                        </Section>

                        {/* Frequently Asked Questions */}
                        <Section id="faq" title="Frequently Asked Questions">
                            <h3>Can I import data from other software?</h3>
                            <p>
                                Currently, Wrapshot supports PDF script import with automatic analysis. CSV import for cast/crew is planned for a future update.
                            </p>

                            <h3>Is my data secure?</h3>
                            <p>
                                Yes. All data is encrypted in transit and at rest. We use industry-standard security practices and secure cloud infrastructure.
                            </p>

                            <h3>Can I work offline?</h3>
                            <p>
                                Wrapshot requires an internet connection. However, your data is saved continuously, so you won&apos;t lose work if you briefly disconnect.
                            </p>

                            <h3>How do I export my data?</h3>
                            <p>You can export:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Call sheets as PDF</li>
                                <li>Budget reports as PDF</li>
                                <li>More export options coming soon</li>
                            </ul>

                            <h3>Can multiple people edit at the same time?</h3>
                            <p>
                                Yes! Wrapshot supports real-time collaboration. Changes sync instantly across all team members.
                            </p>
                        </Section>

                        {/* Changelog */}
                        <Section id="changelog" title="Changelog">
                            <div className="space-y-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="!mb-0">February 2026</h3>
                                        <span className="px-2.5 py-0.5 text-xs font-medium bg-text text-white rounded-full">Launch</span>
                                    </div>
                                    <p className="text-sm font-medium text-text mb-2">New</p>
                                    <ul className="list-disc list-inside space-y-2 mb-6">
                                        <li>Automatic script analysis with scene extraction and element detection</li>
                                        <li>Visual stripeboard with drag-and-drop scheduling</li>
                                        <li>Call sheet generation with PDF export</li>
                                        <li>Budget tracking with receipt OCR scanning</li>
                                        <li>Real-time team collaboration with role-based permissions</li>
                                        <li>Location and permit tracking</li>
                                        <li>Gear and equipment management</li>
                                        <li>Script version control with industry-standard color coding</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3>January 2026</h3>
                                    <p className="text-sm font-medium text-text mb-2">Improved</p>
                                    <ul className="list-disc list-inside space-y-2 mb-4">
                                        <li>Script analysis accuracy and element detection confidence ratings</li>
                                        <li>Stripeboard performance with large scene counts</li>
                                        <li>Mobile responsiveness across all views</li>
                                    </ul>
                                    <p className="text-sm font-medium text-text mb-2">Fixed</p>
                                    <ul className="list-disc list-inside space-y-2 mb-6">
                                        <li>Scene reorder sync issue when multiple users edit simultaneously</li>
                                        <li>PDF export formatting for call sheets with long location names</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3>December 2025</h3>
                                    <p className="text-sm font-medium text-text mb-2">New</p>
                                    <ul className="list-disc list-inside space-y-2 mb-6">
                                        <li>Closed beta launch</li>
                                        <li>Core scheduling and scene breakdown engine</li>
                                        <li>Team invitation system with email onboarding</li>
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        {/* Help Section */}
                        <div className="mt-20 pt-12 border-t border-border">
                            <h2 className="font-serif text-2xl font-normal mb-4">Getting Help</h2>
                            <div className="prose-custom mb-8">
                                <h3>In-App Support</h3>
                                <ul className="list-disc list-inside space-y-2 mb-6">
                                    <li>Click the <strong>Help</strong> button in the navigation</li>
                                    <li>Use the feedback widget to report issues</li>
                                    <li>Check the command palette (<kbd className="px-2 py-1 bg-white border border-border rounded text-xs">Cmd/Ctrl + K</kbd>) for quick actions</li>
                                </ul>

                                <h3>Contact Support</h3>
                                <p>For additional help:</p>
                                <ul className="list-disc list-inside space-y-2 mb-6">
                                    <li>Email: <a href="mailto:support@wrapshoot.com" className="text-text font-medium hover:underline">support@wrapshoot.com</a></li>
                                    <li>Check our FAQ section above</li>
                                </ul>
                            </div>
                            <div className="flex gap-4 max-md:flex-col">
                                <a
                                    href="mailto:support@wrapshoot.com"
                                    className="btn btn-outline"
                                >
                                    Contact Support
                                </a>
                                <a
                                    href="https://app.wrapshoot.com"
                                    className="btn btn-primary"
                                >
                                    Start Your Production
                                </a>
                            </div>
                            <p className="text-sm text-text-muted mt-8 italic">
                                This guide is updated regularly as new features are added. Last updated: February 2026
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function Section({ id, title, children }: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <motion.section
            id={id}
            className="mb-16 scroll-mt-24"
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
