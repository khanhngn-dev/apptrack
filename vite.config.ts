import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { Plugin, defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss() as Plugin[],
    TanStackRouterVite({
      autoCodeSplitting: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
