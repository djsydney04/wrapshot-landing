"use client";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border">
            <div className="max-w-container mx-auto px-12">
                <div className="flex justify-between items-start mb-12 max-md:flex-col max-md:gap-8">
                    <a href="/" className="font-serif text-xl font-medium">Wrapshoot</a>

                    <div className="flex gap-8">
                        <a href="#features" className="text-sm text-text-secondary hover:text-text transition-colors">Features</a>
                        <a href="#pricing" className="text-sm text-text-secondary hover:text-text transition-colors">Pricing</a>
                        <a href="#faq" className="text-sm text-text-secondary hover:text-text transition-colors">FAQ</a>
                        <a href="/contact" className="text-sm text-text-secondary hover:text-text transition-colors">Contact</a>
                    </div>
                </div>

                <div className="pt-6 border-t border-border">
                    <span className="text-sm text-text-muted">© {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
}
