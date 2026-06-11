/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#04091a',
          900: '#070f24',
          850: '#0a1630',
          800: '#0d1f3c',
          700: '#152e58',
          600: '#1e4080',
          500: '#2557a7',
          400: '#3b72c8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)',
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,87,167,0.35) 0%, transparent 70%)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
    },
  },
  plugins: [],
}
