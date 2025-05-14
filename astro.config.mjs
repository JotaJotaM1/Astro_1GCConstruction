// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		mdx()
	],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
		},
	},
	site: 'https://JotaJotaM1.github.io',
	output: 'static',
	base: '/Astro_1GCConstruction'
});
