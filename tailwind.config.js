/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#2E2E2E',           // navy: '#1B2A4A',
        gold: '#D9A441',           // gold: '#D9A441',
        green: '#6B7280',          // green: '#1F5C4E',
        rust: '#A84B2F',           // rust: '#A84B2F',
        sand: '#EDEBE7',           // sand: '#EDE3CC',
        ink: '#232323',            // ink: '#20211D',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['General Sans', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};