export const languages = {
	en: 'EN',
	uk: 'UA',
} as const;

export type Lang = keyof typeof languages;

export const langCodes = Object.keys(languages) as Lang[];

export const defaultLang: Lang = 'en';

/**
 * English is the source of truth: its keys define `TranslationKey`, so every other
 * dictionary below is type-checked against it. A forgotten translation fails the
 * build instead of showing up as an empty string on the page.
 *
 * `{link}` inside a string marks where an inline link belongs, so each language can
 * place it where its own word order needs it.
 */
const en = {
	'site.title': 'onionknight621',
	'site.description':
		'Personal site of onionknight621 — developer, and the person making Carpetorium: A Carpet-Cleaning Purgatory.',

	'wip.intro':
		'This site is under construction. There will be some stuff here soon, but since I have only one pair of hands, not that much info yet.',
	'wip.imageAlt': 'A worn carpet with sign reading "Under construction".',

	'about.body':
		"Hey, I'm onionknight621. Currently I'm working on 'Carpetorium: A Carpet-Cleaning Purgatory'. You can find it {link} (and maybe even add it to your wishlist if you like it (I will be really pleased)).",
	'about.linkLabel': 'here',

	'contacts.discord': 'Discord',
	'contacts.email': 'Email',

	'lang.switcherLabel': 'Change language',
} as const;

export type TranslationKey = keyof typeof en;

const uk: Record<TranslationKey, string> = {
	'site.title': 'onionknight621',
	'site.description':
		'Персональний сайт onionknight621 — розробника і автора гри Carpetorium: A Carpet-Cleaning Purgatory.',

	'wip.intro':
		'Сайт у розробці. Скоро тут буде хоч щось цікаве, але руки в мене одні, тож поки що якось так.',
	'wip.imageAlt': 'Потертий килим з написом «Under construction».',

	'about.body':
		"Привіт, я onionknight621. Зараз працюю над 'Carpetorium: A Carpet-Cleaning Purgatory'. Знайти її можна {link} (і навіть додати у вішліст, якщо сподобається (мені буде дуже приємно)).",
	'about.linkLabel': 'тут',

	'contacts.discord': 'Discord',
	'contacts.email': 'Пошта',

	'lang.switcherLabel': 'Змінити мову',
};

export const dictionaries: Record<Lang, Record<TranslationKey, string>> = { en, uk };
