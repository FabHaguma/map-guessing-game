// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base path for custom domain deployment
export default defineConfig({
  plugins: [react()],
  base: '/',
});