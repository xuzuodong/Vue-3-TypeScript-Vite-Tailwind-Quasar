import { defineConfig } from 'vite'
import path from 'path'
import eslint from '@rollup/plugin-eslint'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        {
            ...eslint({
                include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.d.ts'],
            }),
            // important! https://vitejs.dev/guide/using-plugins.html#enforcing-plugin-ordering
            enforce: 'pre',
        },
        vue(),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(path.resolve(__dirname), 'src'),
            },
        ],
    },
})
