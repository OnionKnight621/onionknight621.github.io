// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://onionknight621.github.io',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'uk'],
		routing: {
			// English stays at the root (`/`), Ukrainian is prefixed (`/uk/`).
			prefixDefaultLocale: false,
		},
	},
});
