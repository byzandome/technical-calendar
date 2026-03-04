import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		// Optimize chunk splitting
		rollupOptions: {
			output: {
				// Manual chunk splitting for better caching
				manualChunks: {
					// Split vendor dependencies
					"vendor-react": ["react", "react-dom"],
					"vendor-state": ["zustand"],
					"vendor-utils": ["clsx", "tailwind-merge", "zod"],
					"vendor-dates": ["date-fns"],
				},
				// Optimize module preloading
				entryFileNames: "js/[name]-[hash].js",
				chunkFileNames: "js/[name]-[hash].js",
				assetFileNames: (assetInfo) => {
					if (!assetInfo.name) return "assets/[name]-[hash][extname]";
					const info = assetInfo.name.split(".");
					const ext = info[info.length - 1];
					if (/png|jpe?g|gif|svg/.test(ext)) {
						return `assets/images/[name]-[hash][extname]`;
					} else if (/woff|woff2|eot|ttf|otf/.test(ext)) {
						return `assets/fonts/[name]-[hash][extname]`;
					}
					return `assets/[name]-[hash][extname]`;
				},
			},
		},
		// Enable minification optimizations (use esbuild built-in)
		minify: "esbuild",
		// CSS minification
		cssMinify: true,
		// Aggressive optimizations
		cssCodeSplit: true,
		// Increase chunk size warning threshold
		chunkSizeWarningLimit: 500,
		// Enable source maps for production debugging (optional, remove for smaller bundles)
		sourcemap: false,
		// Improve build performance
		reportCompressedSize: true,
		// Disable empty chunk optimization
		emptyOutDir: true,
	},
});
