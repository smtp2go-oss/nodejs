import { defineConfig } from 'vite';
import { builtinModules } from 'module'
export default defineConfig({
    build: {
        outDir: 'build',
        emptyOutDir: false,
        minify: true,
        sourcemap: true,
        lib: {
            entry: './src/lib/index.ts',
            name: 'SMTP2GOApi',
        },
        rollupOptions: {
            external: Array.from(builtinModules),
            output: [
                {
                    format: 'es',
                    entryFileNames: 'index.node.js',
                    globals: {},
                    intro: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);'
                },
                {
                    format: 'cjs',
                    entryFileNames: 'index.node.cjs',
                    exports: 'named',
                    globals: {},
                }
            ]
        }
    }
});