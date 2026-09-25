/** @type {import('tailwindcss').Config} */
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-soft': 'var(--color-bg-soft)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        border: 'var(--color-border)',
        glass: 'var(--color-glass)',
        accent: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1D4ED8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 50px -8px rgba(59,130,246,0.45)',
        'glow-sm': '0 0 24px -6px rgba(59,130,246,0.4)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
          '50%': { transform: 'translateY(20px) translateX(-16px) scale(1.05)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        floatSlower: 'floatSlower 13s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
