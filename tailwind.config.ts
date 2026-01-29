import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#FCFCFC",
                "bg-alt": "#F7F7F7",
                border: "#EBEBEB",
                text: "#1A1A1A",
                "text-secondary": "#666666",
                "text-muted": "#999999",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "-apple-system", "sans-serif"],
                serif: ["var(--font-newsreader)", "Georgia", "serif"],
            },
            maxWidth: {
                container: "1200px",
            },
            spacing: {
                section: "160px",
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
        },
    },
    plugins: [],
};

export default config;
