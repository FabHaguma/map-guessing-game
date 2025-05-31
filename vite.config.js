// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get your repository name from the package.json or define it directly
// const repositoryName = 'map-guessing-game'; // Or read from package.json

export default defineConfig(({ command }) => {
  // Determine base path based on command (serve or build)
  // and specifically for GitHub Pages deployment
  let base = '/'; // Default for development

  // For GitHub Pages, the base path is /<repository-name>/
  // You can get this from your package.json homepage or set it directly
  // For this example, let's assume your repo name is 'map-guessing-game'
  const repoName = 'map-guessing-game'; // Hardcode or derive

  if (command === 'dist') {
    // Check if we are building for GitHub Pages, often indicated by an env variable or script context
    // A common way is to set it based on a specific deploy script, or just always for build.
    // For simplicity, if building, assume it's for GitHub Pages for now.
    base = `/${repoName}/`;
  }
  
  // If you have a "homepage" field in your package.json, Vite can often infer this,
  // but explicitly setting it is safer for gh-pages.

  return {
    plugins: [react()],
    base: base, //  e.g., '/map-guessing-game/'
    // build: { // Optional: if you want to change the output directory from 'dist'
    //   outDir: 'build' // Default is 'dist'
    // }
  };
});