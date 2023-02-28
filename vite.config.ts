import { defineConfig, loadEnv } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const defineConfigFn = (mode: any) =>
    defineConfig({
        build: {
            outDir: 'build',
        },
        plugins: [react(), svgrPlugin(), viteTsconfigPaths()],
        server: {
            port: 3000,
        },
        define: {
            'process.env': loadEnv(mode, process.cwd(), ''),
        },
    });
export default defineConfigFn;
