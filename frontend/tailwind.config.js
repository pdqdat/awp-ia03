import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: colors.purple[600],
                hover: colors.purple[500],
                error: colors.red[500],
            },
            keyframes: {
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                text: "text 5s ease infinite",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents }) {
            addBase({});
            addComponents({
                ".container": {
                    "@apply max-w-[77.5rem] mx-auto px-4 md:px-8 lg:px-10 xl:max-w-[87.5rem]":
                        {},
                },
                ".beautiful-btn": {
                    "@apply animate-text rounded-md bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 px-3.5 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary":
                        {},
                },
                ".primary-btn": {
                    "@apply flex items-center justify-center rounded-md bg-primary px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 transition-colors":
                        {},
                },
                ".secondary-btn": {
                    "@apply flex items-center justify-center rounded-md bg-gray-200 px-3 py-1.5 font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 transition-colors":
                        {},
                },
                ".primary-link": {
                    "@apply text-primary hover:text-hover": {},
                },
            });
        }),
        forms,
    ],
};
