/** @type {import('tailwindcss').Config} */
module.exports = {
  // IMPORTANT: Ensure this 'content' array correctly points to all your files
  // where you use Tailwind CSS classes.
  content: [
    "./index.html", // Your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // All JS, TS, JSX, TSX files in src/ and its subfolders
  ],
  theme: {
    extend: {
      colors: {
        'smartmind-dark': '#4b648d',       // Your Dark Blue
        'smartmind-medium': '#5987a8',     // Your Medium Blue
        'smartmind-light': '#b9e4f4',      // Your Light Blue
        'smartmind-very-light': '#e7fbf9', // Your Very Light Blue
      },
      keyframes: {
        // Animation for the entire page container on load
        pageReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Animation for the Hero section (bigger entrance)
        heroEnter: {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        // For text sliding in
        textSlideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // For elements fading in from bottom with a slight pop
        elementPopUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        // For icons/circular elements bouncing slightly
        iconBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        // For the subtle gradient background motion
        gradientMotion: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'page-reveal': 'pageReveal 0.8s ease-out forwards',
        'hero-enter': 'heroEnter 1s ease-out forwards',
        'text-slide-in': 'textSlideIn 0.7s ease-out forwards',
        'element-pop-up': 'elementPopUp 0.6s ease-out forwards',
        'icon-bounce': 'iconBounce 0.3s ease-in-out', // For hover
        'gradient-motion': 'gradientMotion 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}