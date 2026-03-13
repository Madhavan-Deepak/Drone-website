/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
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
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 15, 23, 0.08)'
      },
      borderColor: {
        divider: 'var(--border)'
      }
    }
  },
  plugins: []
};
