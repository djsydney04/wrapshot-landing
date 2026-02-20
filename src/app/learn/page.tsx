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
    { id: "feature-list", title: "Feature List" },
    { id: "creating-project", title: "Creating Your First Project" },
    { id: "script-analysis", title: "Uploading & Analyzing Your Script" },
    { id: "managing-scenes", title: "Managing Scenes" },
    { id: "cast", title: "Building Your Cast" },
    { id: "crew", title: "Organizing Your Crew" },
    { id: "scheduling", title: "Scheduling & Stripboard" },
    { id: "call-sheets", title: "Call Sheets & Distribution" },
    { id: "breakdown", title: "Scene Breakdown" },
    { id: "budget", title: "Budget & Finance" },
    { id: "locations", title: "Locations" },
    { id: "gear", title: "Gear & Equipment" },
    { id: "collaboration", title: "Team Collaboration" },
    { id: "assistant", title: "Smart Assistant" },
    { id: "tips", title: "Tips & Best Practices" },
    { id: "faq", title: "Frequently Asked Questions" },
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
                        <Link href="/" className="font-serif text-xl font-medium">Wrapshoot</Link>
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
                                Wrapshoot User Guide
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Your complete guide to managing film productions with Wrapshoot.
                                From your first project to wrapping your shoot—we&apos;ve got you covered.
                            </p>
                        </motion.div>

                        {/* Getting Started */}
                        <Section id="getting-started" title="Getting Started">
                            <h3>Creating Your Account</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Visit the Wrapshoot website and click <strong>Sign Up</strong></li>
                                <li>Enter your email address and create a password</li>
                                <li>Verify your email address by clicking the link sent to your inbox</li>
                                <li>Complete your profile with your name and optional phone number</li>
                            </ol>

                            <h3>Navigating the Dashboard</h3>
                            <p>
                                After logging in, you&apos;ll see your <strong>Projects Dashboard</strong> showing all your
                                projects with their current status, quick-start recommendations, and upcoming shooting days.
                            </p>
                        </Section>

                        {/* Feature List */}
                        <Section id="feature-list" title="Feature List">
                            <p className="mb-4">Use this as a quick feature checklist before diving into full workflows.</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Project creation and setup wizard</li>
                                <li>AI script upload, parsing, and scene extraction</li>
                                <li>Scene management (grid, kanban, timeline, list)</li>
                                <li>Cast directory and invitations</li>
                                <li>Crew directory, departments, and access controls</li>
                                <li>Schedule planning (month/week/list)</li>
                                <li>Drag-and-drop stripboard scheduling</li>
                                <li>Call sheet drafting, publishing, PDF export, and distribution</li>
                                <li>Scene breakdown management (props, wardrobe, vehicles, effects, and more)</li>
                                <li>Budget tracking and finance workflows</li>
                                <li>Location database, permit status, and location intelligence</li>
                                <li>Gear and equipment tracking by scene/department</li>
                                <li>Project sharing with role-based permissions</li>
                                <li>Project assistant for planning and operational questions</li>
                            </ul>
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
                                When you create a new project, Wrapshoot offers a guided <strong>Setup Wizard</strong> to help you:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Upload your script</li>
                                <li>Add your first shooting days</li>
                                <li>Add cast members</li>
                                <li>Add crew members</li>
                            </ol>
                            <p className="mb-6">You can skip any step and complete it later.</p>

                            <h3>Step 4: Use the Getting Started Checklist</h3>
                            <p>
                                After setup, the <strong>Overview</strong> tab shows a Getting Started checklist so your team can track what
                                is done and what still needs setup:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Upload script</li>
                                <li>Add scenes</li>
                                <li>Add cast members</li>
                                <li>Add crew members</li>
                                <li>Add shooting days</li>
                            </ul>
                            <p>Each checklist row links directly to the section where that task is completed.</p>
                        </Section>

                        {/* Uploading & Analyzing Your Script */}
                        <Section id="script-analysis" title="Uploading & Analyzing Your Script">
                            <div className="bg-bg-alt border border-border rounded-xl p-6 mb-8">
                                <h4 className="font-medium mb-2">
                                    How AI Script Analysis Works
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Wrapshoot Intelligence can automatically analyze your script to extract all scenes with scene numbers,
                                    identify INT/EXT and DAY/NIGHT, detect production elements (props, wardrobe, vehicles, etc.),
                                    generate scene synopses, and estimate shooting times.
                                </p>
                            </div>

                            <h3>Uploading Your Script</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Navigate to your project</li>
                                <li>Go to the <strong>Script</strong> section in the sidebar</li>
                                <li>Click <strong>Upload Script</strong> or drag-and-drop your PDF</li>
                                <li>Wrapshoot will automatically begin analysis</li>
                            </ol>

                            <h3>Reviewing Script Analysis Results Dashboard</h3>
                            <p>After analysis completes, open the <strong>Script Analysis Results</strong> panel:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Review generated scenes and delete any incorrect entries</li>
                                <li>Review element categories and remove false positives</li>
                                <li>Confirm or adjust cast names</li>
                                <li>Accept or dismiss crew suggestions</li>
                                <li>Use quick links in the panel to jump into full sections for deeper edits</li>
                            </ol>

                            <h3>Script Versions</h3>
                            <p>
                                Keep track of revisions by uploading new script versions. Each version is color-coded
                                (White, Blue, Pink, Yellow, etc.) following industry standards. Trigger script change analysis
                                to see what changed. The active version is used for breakdown and scheduling.
                            </p>

                            <h3>Reviewing Script Version Changes</h3>
                            <p>When a new script version is uploaded:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Wait for the change analysis banner to appear</li>
                                <li>Click <strong>Review</strong> to open version differences</li>
                                <li>Confirm added, removed, and modified scenes</li>
                                <li>Update schedule, breakdown, and budget based on the approved changes</li>
                            </ol>
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
                            <p>If you&apos;re not using AI analysis, add scenes manually:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Click <strong>Add Scene</strong></li>
                                <li>Enter scene details: scene number, synopsis/description, INT or EXT, DAY or NIGHT, page count (in eighths), and location</li>
                            </ol>

                            <h3>Editing Scenes</h3>
                            <p>Click any scene to open the detail panel where you can:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Edit all scene information</li>
                                <li>Assign cast members</li>
                                <li>Add production elements</li>
                                <li>View AI suggestions</li>
                                <li>Add notes</li>
                            </ul>

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
                                <li>Enter character name, actor name, contact info (email, phone), agent info (optional), and day rate / week rate (optional)</li>
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

                            <h3>Assigning Cast to Scenes</h3>
                            <p>Link cast members to scenes they appear in:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Open a scene&apos;s detail panel</li>
                                <li>Go to the <strong>Cast</strong> tab</li>
                                <li>Select cast members who appear in this scene</li>
                            </ol>
                        </Section>

                        {/* Organizing Your Crew */}
                        <Section id="crew" title="Organizing Your Crew">
                            <h3>Adding Crew Members</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to the <strong>Crew</strong> section</li>
                                <li>Click <strong>Add Crew Member</strong></li>
                                <li>Enter name, role/position, department, contact info, and rate (optional)</li>
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

                            <h3>Inviting Crew</h3>
                            <p>Similar to cast, invite crew members to access the project:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Click <strong>Invite</strong> on a crew member</li>
                                <li>Enter their email</li>
                                <li>Select their permission level</li>
                                <li>They&apos;ll receive an invitation link</li>
                            </ol>
                        </Section>

                        {/* Scheduling & Stripboard */}
                        <Section id="scheduling" title="Scheduling & Stripboard">
                            <h3>Understanding the Stripboard</h3>
                            <p>
                                The stripboard is the traditional film scheduling tool, now digital. Each scene is
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

                            <h3>Reordering Scenes</h3>
                            <p>
                                Within a shooting day, drag scenes to change the shooting order. Scene order is saved automatically.
                            </p>

                            <h3>Calendar Views</h3>
                            <p>Switch between views:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Stripboard</strong> — Traditional strip view</li>
                                <li><strong>Monthly Calendar</strong> — Overview of the entire shoot</li>
                                <li><strong>Weekly Calendar</strong> — Detailed weekly view</li>
                            </ul>
                        </Section>

                        {/* Call Sheets & Distribution */}
                        <Section id="call-sheets" title="Call Sheets & Distribution">
                            <h3>Creating a Call Sheet</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to your project and open the <strong>Call Sheets</strong> section</li>
                                <li>Select a shooting day</li>
                                <li>If no call sheet exists yet, click <strong>Create</strong></li>
                                <li>Fill in key details: general notes, safety notes, parking and meal notes, department and cast call times</li>
                            </ol>

                            <h3>Saving Draft vs Publishing</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Click <strong>Save</strong> to keep a draft</li>
                                <li>Click <strong>Publish</strong> when the sheet is ready for the team</li>
                                <li>Published versions are tracked per shooting day</li>
                            </ul>

                            <h3>Exporting a PDF</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Open the call sheet for a shooting day</li>
                                <li>Click <strong>Download PDF</strong></li>
                                <li>Wrapshoot saves any pending edits, then generates the file</li>
                            </ol>

                            <h3>Distributing to Cast &amp; Crew</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Open the call sheet and click <strong>Distribute</strong></li>
                                <li>Select cast and crew recipients (only members with email)</li>
                                <li>Click <strong>Send</strong></li>
                                <li>Recipients receive the call sheet by email</li>
                            </ol>
                        </Section>

                        {/* Scene Breakdown */}
                        <Section id="breakdown" title="Scene Breakdown">
                            <h3>What is Scene Breakdown?</h3>
                            <p>
                                Scene breakdown identifies everything needed to shoot each scene: props, wardrobe,
                                vehicles, makeup/hair, special effects, background actors, special equipment, and more.
                            </p>

                            <h3>Using AI-Generated Breakdowns</h3>
                            <p>If you used AI script analysis, many elements are pre-populated:</p>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Open a scene&apos;s detail panel</li>
                                <li>Go to the <strong>Breakdown</strong> tab</li>
                                <li>Review suggested elements</li>
                                <li>Click <strong>Accept</strong> to confirm or <strong>Dismiss</strong> to remove</li>
                            </ol>

                            <h3>Adding Elements Manually</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Open a scene</li>
                                <li>Go to the <strong>Breakdown</strong> tab</li>
                                <li>Click <strong>Add Element</strong></li>
                                <li>Select a category</li>
                                <li>Enter the element name and any notes</li>
                            </ol>

                            <h3>Element Categories</h3>
                            <p>Wrapshoot supports 25+ breakdown categories:</p>
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {["Names & Character References", "Background/Extras", "Props", "Vehicles",
                                    "Wardrobe", "Makeup/Hair", "Camera", "Grip & Electric",
                                    "Sound & Music", "SFX (Practical Effects)", "VFX (Visual Effects)", "Mechanical Effects",
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

                            <h3>Adding Line Items</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Select a category</li>
                                <li>Click <strong>Add Line Item</strong></li>
                                <li>Enter description, quantity, unit type (days, weeks, flat, etc.), and unit rate</li>
                                <li>The total calculates automatically</li>
                            </ol>

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
                                Upload receipts and Wrapshoot will attempt to extract the vendor name, amount, date,
                                and suggested category automatically.
                            </p>

                            <h3>Budget Health</h3>
                            <p>Monitor your budget status:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><span className="text-green-600 font-medium">Under Budget</span> — Spending less than estimated</li>
                                <li><span className="text-yellow-600 font-medium">On Track</span> — Close to estimates</li>
                                <li><span className="text-red-600 font-medium">Over Budget</span> — Exceeding estimates</li>
                            </ul>

                            <h3>Department Budget Workflow</h3>
                            <div className="bg-bg-alt border border-border rounded-xl p-6 mb-6">
                                <p className="text-text-secondary text-sm mb-4">
                                    Use this when department heads and finance need a structured approval flow:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-sm mb-4">
                                    <li>Finance assigns a department owner in the budget builder</li>
                                    <li>Department owner updates line items and allocation</li>
                                    <li>Department owner clicks <strong>Submit</strong> when ready</li>
                                    <li>Finance reviews and chooses <strong>Approve</strong> or <strong>Request Revision</strong></li>
                                    <li>If needed, finance can reopen an approved department for further changes</li>
                                </ol>
                                <p className="text-text-secondary text-sm">Department statuses move through:</p>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li><strong>Not Started</strong></li>
                                    <li><strong>In Progress</strong></li>
                                    <li><strong>Submitted</strong></li>
                                    <li><strong>Revision Requested</strong></li>
                                    <li><strong>Approved</strong></li>
                                </ul>
                            </div>
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

                            <h3>Assigning Locations to Scenes</h3>
                            <p>When editing a scene, select its location from your location database.</p>

                            <h3>Using Location Intelligence</h3>
                            <div className="bg-bg-alt border border-border rounded-xl p-6 mb-6">
                                <p className="text-text-secondary text-sm mb-4">
                                    For each selected location, Wrapshoot Intelligence can generate nearby support suggestions,
                                    permit office guidance, permit checklist items, and logistics risks and next actions.
                                </p>
                                <p className="text-text-secondary text-sm">How to use it:</p>
                                <ol className="list-decimal list-inside space-y-2 text-sm">
                                    <li>Open the <strong>Locations</strong> section and select a location</li>
                                    <li>Open the <strong>Location Intelligence</strong> panel</li>
                                    <li>Review suggestions and permit guidance</li>
                                    <li>Click <strong>Refresh</strong> after changing location notes to regenerate recommendations</li>
                                </ol>
                            </div>
                        </Section>

                        {/* Gear & Equipment */}
                        <Section id="gear" title="Gear & Equipment">
                            <h3>Managing Equipment</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Go to the <strong>Gear</strong> section</li>
                                <li>Click <strong>Add Equipment</strong></li>
                                <li>Enter item name, category, department responsible, and notes/specifications</li>
                            </ol>

                            <h3>Scene-Based Gear</h3>
                            <p>
                                Track which equipment is needed for specific scenes. Open a scene&apos;s detail panel,
                                go to the <strong>Gear</strong> tab, and select required equipment.
                            </p>

                            <h3>Equipment Categories</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li><strong>Camera</strong> — cameras, lenses, accessories</li>
                                <li><strong>Lighting</strong> — lights, stands, modifiers</li>
                                <li><strong>Sound</strong> — mics, recorders, playback</li>
                                <li><strong>Art</strong> — set dec, props</li>
                                <li><strong>Costume</strong></li>
                                <li><strong>Props</strong></li>
                                <li><strong>Vehicles</strong></li>
                                <li><strong>Special Equipment</strong></li>
                            </ul>
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

                        {/* Smart Assistant */}
                        <Section id="assistant" title="Smart Assistant">
                            <h3>What It Can Help With</h3>
                            <p>The Smart Assistant can answer project-specific questions about:</p>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Scene status and unscheduled work</li>
                                <li>Permit follow-up and location risks</li>
                                <li>Schedule planning and sequencing</li>
                                <li>Cast/crew context from current project data</li>
                            </ul>

                            <h3>How to Use It</h3>
                            <ol className="list-decimal list-inside space-y-2 mb-6">
                                <li>Open the <strong>Assistant</strong> section in your project</li>
                                <li>Type a question or pick a quick prompt</li>
                                <li>Send with <kbd className="px-2 py-1 bg-white border border-border rounded text-xs">Cmd/Ctrl + Enter</kbd> or click <strong>Send</strong></li>
                                <li>Review suggestions and apply changes in the linked project sections</li>
                            </ol>

                            <h3>Tips for Better Results</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Ask specific questions (&quot;What scenes are unscheduled for next week?&quot;)</li>
                                <li>Include constraints (days, locations, cast availability)</li>
                                <li>Follow up with focused refinement prompts</li>
                            </ul>
                        </Section>

                        {/* Tips & Best Practices */}
                        <Section id="tips" title="Tips & Best Practices">
                            <h3>Getting the Most from AI Analysis</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Upload clean, well-formatted PDFs</li>
                                <li>Standard screenplay format works best</li>
                                <li>Review AI suggestions carefully—they&apos;re helpful but not perfect</li>
                                <li>Use AI as a starting point, then refine manually</li>
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
                                Currently, Wrapshoot supports PDF script import with AI analysis. CSV import for cast/crew is planned for a future update.
                            </p>

                            <h3>Is my data secure?</h3>
                            <p>
                                Yes. All data is encrypted in transit and at rest. We use industry-standard security practices and secure cloud infrastructure.
                            </p>

                            <h3>Can I work offline?</h3>
                            <p>
                                Wrapshoot requires an internet connection. However, your data is saved continuously, so you won&apos;t lose work if you briefly disconnect.
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
                                Yes! Wrapshoot supports real-time collaboration. Changes sync instantly across all team members.
                            </p>
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
                                    <li>Join our community forums</li>
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
                                This guide is updated regularly as new features are added. Last updated: February 2026 (feature workflow refresh).
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
