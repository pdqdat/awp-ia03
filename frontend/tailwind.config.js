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
            });
        }),
        forms,
    ],
};
