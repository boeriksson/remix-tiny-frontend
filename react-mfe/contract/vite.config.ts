import { defineConfig } from "vite"

import { rollupExternals } from "./rollupExternals"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "./src/main.ts",
            name: "reactMfeContract",
            fileName: (format) => `react-mfe-contract.${format}.js`,
        },
        rollupOptions: {
            ...rollupExternals,
        },
    },
})