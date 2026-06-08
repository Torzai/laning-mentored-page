import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  publicDir: 'src/public',
  build: {
    target: ['es2020'],
  },
  plugins: [analog()],
}));
