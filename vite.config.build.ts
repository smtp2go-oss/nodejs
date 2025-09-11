import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir:'build',
    emptyOutDir: false,
    minify:false,
    sourcemap:true,
    lib: {
      entry: {
        browser: './src/lib/index.browser.ts'
      },
      name: 'SMTP2GOApi',
      formats: ['es'],
      fileName: (format) => `index.browser.js`
    },
    rollupOptions: {
      output: {
        globals: {
          // Add global mappings if needed
        }
      }
    }
  }
});