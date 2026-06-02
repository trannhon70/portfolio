import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                mono: ['DM Mono', 'monospace'],
                body: ['Outfit', 'sans-serif'],
            },
            colors: {
                lime: { DEFAULT: '#c8f135', dark: '#a8cc20' },
                ink: {
                    950: '#080808',
                    900: '#0f0f0f',
                    800: '#161616',
                    700: '#1e1e1e',
                    600: '#2a2a2a',
                    500: '#3d3d3d',
                    400: '#666',
                    300: '#999',
                    200: '#ccc',
                    100: '#f0f0f0',
                }
            },
            animation: {
                'fade-up': 'fadeUp 0.7s ease forwards',
                'fade-up-d1': 'fadeUp 0.7s ease 0.15s forwards',
                'fade-up-d2': 'fadeUp 0.7s ease 0.3s forwards',
                'fade-up-d3': 'fadeUp 0.7s ease 0.45s forwards',
                'fade-up-d4': 'fadeUp 0.7s ease 0.6s forwards',
                'spin-slow': 'spin 20s linear infinite',
                'spin-reverse': 'spin 25s linear infinite reverse',
                'pulse-dot': 'pulseDot 1.8s ease-in-out infinite',
                'grid-drift': 'gridDrift 18s linear infinite',
                'float': 'float 7s ease-in-out infinite',
                'float-delay': 'float 9s ease-in-out 2s infinite reverse',
                'marquee': 'marquee 18s linear infinite',
                'bar-grow': 'barGrow 1.2s ease forwards',
            },
            keyframes: {
                fadeUp: { '0%': { opacity: 0, transform: 'translateY(28px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
                pulseDot: { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: 0.4, transform: 'scale(1.6)' } },
                gridDrift: { '0%': { transform: 'translateY(0)' }, '100%': { transform: 'translateY(56px)' } },
                float: { '0%,100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-24px) scale(1.04)' } },
                marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
                barGrow: { '0%': { width: '0%' }, '100%': { width: 'var(--bar-w)' } },
            }
        }
    },
    plugins: [],
}

export default config