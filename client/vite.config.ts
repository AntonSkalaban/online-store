import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: 'src/assets',
      components: '/src/components',
      pages: '/src/pages',
      hooks: '/src/hooks',
      hok: '/src/hok',
      helpers: '/src/helpers',
      services: '/src/services',
      store: '/src/store',
      types: '/src/types',
      const: '/src/const',
    },
  },
});
