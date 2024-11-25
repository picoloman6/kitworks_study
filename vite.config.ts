import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      },
      {
        find: '@apis',
        replacement: path.resolve(__dirname, './src/apis')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages')
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, './src/styles')
      },
      {
        find: '@type',
        replacement: path.resolve(__dirname, './src/type')
      }
    ]
  }
});
