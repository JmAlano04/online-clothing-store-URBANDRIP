import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import animate from 'tailwindcss-animate'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss({
            plugins: [animate],
        }),
    ],
    content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],
      },
    },
  },
    esbuild: {
        jsx: 'automatic',
    },
})