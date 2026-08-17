import { defaultLang, dictionaries, languages, type Lang, type TranslationKey } from './ui';

function isLang(value: string | undefined): value is Lang {
	return value !== undefined && value in languages;
}

/**
 * The current language is read from the URL rather than passed down as a prop, so
 * any component can ask for it without every parent having to forward it.
 */
export function getLangFromUrl(url: URL): Lang {
	const [, firstSegment] = url.pathname.split('/');
	return isLang(firstSegment) ? firstSegment : defaultLang;
}

export function useTranslations(lang: Lang) {
	const dictionary = dictionaries[lang];
	return function t(key: TranslationKey): string {
		return dictionary[key];
	};
}

/** Removes the language prefix, so `/uk/about` becomes `/about`. */
export function stripLangFromPath(pathname: string): string {
	const segments = pathname.split('/');
	if (isLang(segments[1])) {
		segments.splice(1, 1);
	}
	const stripped = segments.join('/');
	return stripped === '' ? '/' : stripped;
}

/** Turns a language-agnostic path like `/about` into `/about` (en) or `/uk/about` (uk). */
export function localizePath(path: string, lang: Lang): string {
	const absolutePath = path.startsWith('/') ? path : `/${path}`;
	return lang === defaultLang ? absolutePath : `/${lang}${absolutePath}`;
}
