/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./public/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            width: {
                "1/7": `${100 / 7}%`,
                "1/8": `${100 / 8}%`
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans]
            },
            keyframes: {
                bounce: {
                    "0%, 100%": {
                        transform: "translateY(-10%)",
                        animationTimingFunction: " cubic-bezier(0.8, 0, 1, 1)"
                    },
                    "50%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
                    }
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" }
                },
                denied: {
                    "0%, 100%": {
                        boxShadow: `rgb(255, 255, 255) 0px 0px 0px 0px, ${colors.rose["600"]} 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`,
                        opacity: 0.6
                    },
                    "50%": {
                        boxShadow: `rgb(255, 255, 255) 0px 0px 0px 0px, ${colors.rose["600"]} 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`,
                        opacity: 1
                    }
                }
            },
            animation: {
                bounce: "bounce 1s infinite",
                denied: "denied 0.5s linear 0s 4 alternate !important",
                wiggle: "wiggle 1s ease-in-out infinite"
            }
        },
        screens: {
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px"
        },
        container: {
            center: true,
            padding: "0.75rem"
        }
    },
    plugins: []
};
