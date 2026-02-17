"use client";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border">
            <div className="max-w-container mx-auto px-12">
                <div className="flex justify-between items-start mb-12 max-md:flex-col max-md:gap-8">
                    <a href="/" className="font-serif text-xl font-medium">Wrapshot</a>

                    <div className="flex gap-8 max-md:flex-wrap">
                        <a href="#features" className="text-sm text-text-secondary hover:text-text transition-colors">Features</a>
                        <a href="#pricing" className="text-sm text-text-secondary hover:text-text transition-colors">Pricing</a>
                        <a href="/learn" className="text-sm text-text-secondary hover:text-text transition-colors">User Guide</a>
                        <a href="#faq" className="text-sm text-text-secondary hover:text-text transition-colors">FAQ</a>
                        <a href="mailto:hello@wrapshot.com" className="text-sm text-text-secondary hover:text-text transition-colors">Contact</a>
                    </div>
                </div>

                <div className="pt-6 border-t border-border flex justify-between items-center max-md:flex-col max-md:gap-4">
                    <span className="text-sm text-text-muted">&copy; {new Date().getFullYear()} Wrapshot. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="/privacy" className="text-sm text-text-muted hover:text-text transition-colors">Privacy</a>
                        <a href="/terms" className="text-sm text-text-muted hover:text-text transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
