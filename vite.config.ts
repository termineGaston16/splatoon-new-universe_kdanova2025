/// <reference types='vitest' />

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import { configDefaults } from "vitest/config.js";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        exclude: [...configDefaults.exclude]
    }
})