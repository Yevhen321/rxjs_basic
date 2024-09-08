/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react({ devTarget: 'es2022' }), TanStackRouterVite()],
   resolve: {
      alias: [
         { find: '~', replacement: path.resolve(__dirname, 'src') },
         { find: '@todos', replacement: path.resolve(__dirname, 'src/modules/todos') },
      ],
   },
   optimizeDeps: {
      esbuildOptions: {
         define: {
            global: 'globalThis',
         },
      },
   },
   test: {
      globals: true,
      environment: 'jsdom',
      css: true,
      setupFiles: './src/test/setup.ts',
   },
});
