import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://police-spical-branch-transport-portal.onrender.com/', // Proxy API requests to your backend server
    },
  },
});
