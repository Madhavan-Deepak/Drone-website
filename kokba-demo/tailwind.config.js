/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        lg: '1080px',
        xl: '1240px'
      }
    },
    extend: {
      fontFamily: {
        display: ['"Open Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif']
      },
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)'
      },
      boxShadow: {
        soft: '0 12px 30px rgba(11, 15, 23, 0.08)',
        hero: '0 18px 40px rgba(11, 15, 23, 0.10)'
      }
    }
  },
  plugins: []
};
