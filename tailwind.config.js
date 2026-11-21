/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette « Rose & Espresso » : crème chaude, rose poudré, or champagne, brun-prune profond
        cream: '#FBF7F3',
        blush: '#F5E8E3',
        sand: '#EBDDD5',
        rose: { DEFAULT: '#C07A84', dark: '#94505C', light: '#E9C9C9' },
        gold: { DEFAULT: '#C9A267', light: '#E6D2AE' },
        ink: { DEFAULT: '#24161B', soft: '#3B272E', muted: '#6E5B60' },
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1240px' },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(36, 22, 27, 0.18)',
        lift: '0 24px 60px -18px rgba(36, 22, 27, 0.30)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
