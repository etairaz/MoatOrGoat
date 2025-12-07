/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f172a', // bg-slate-900
                moat: '#39ff14', // Neon Green
                goat: '#ff00ff', // Hot Pink
            },
            fontFamily: {
                retro: ['"Press Start 2P"', 'cursive'],
            },
        },
    },
    plugins: [],
}
