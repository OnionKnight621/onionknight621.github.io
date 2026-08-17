// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://onionknight621.github.io',

	// GitHub Pages serves this branch from `docs/`, so build straight into it.
	outDir: './docs',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'uk'],
		routing: {
			// English stays at the root (`/`), Ukrainian is prefixed (`/uk/`).
			prefixDefaultLocale: false,
		},
	},
});
