import { defineConfig } from 'vite';
export default defineConfig({
    root: 'src/web',
    worker: {
        format: 'es',
    },
    build: {

        rollupOptions: {
            input: {
                main: 'src/web/index.html',
            },
            output: {
            }
        }
    }
});