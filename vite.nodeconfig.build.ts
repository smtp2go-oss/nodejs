import { defineConfig } from 'vite';
import { builtinModules } from 'module'
export default defineConfig({
    build: {
        outDir: 'build',
        emptyOutDir: false,
        minify: true,
        sourcemap: true,
        lib: {
            entry: './src/lib/index.ts', // Node entry point
            name: 'SMTP2GOApi',
            formats: ['es'], // ES module output
            fileName: () => 'index.node.js'
        },
        rollupOptions: {
            external: Array.from(builtinModules),
            output: {
                globals: {},
                // Set the platform to Node
                intro: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);'
            }
        }
    }
});