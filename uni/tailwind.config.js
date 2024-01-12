/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
    extend: {
        colors: {
            primary: '#7B61FF',
            primaryLow: '#A9A0F3',
            textSecond: '#6C6993',
            back: '#ECF2F9',
        },
        fontFamily: {
            nuni: ["Nunito", "sans-serif"],
        },
    },
    screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
    },
};
export const plugins = [];