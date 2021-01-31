import getConfig from 'next/config';
import Locale from 'lib/graphql/types/Locale';

const { publicRuntimeConfig } = getConfig();

export interface I18nConfig {
  readonly locales: Locale[];
  readonly defaultLocale: Locale;
}

const i18nConfig = publicRuntimeConfig?.i18n;
if (!i18nConfig) {
  throw new Error('Missing i18n configuration in publicRuntimeConfig');
}

const { locales, defaultLocale } = i18nConfig;
if (!locales || !Array.isArray(locales) || !locales.every((i) => typeof i === 'string')) {
  throw new Error('Missing i18n.locales or not an array of strings');
}

if (!defaultLocale || !locales.includes(defaultLocale)) {
  throw new Error('Missing i18n.locales or not an array of strings');
}

export default Object.freeze({ locales, defaultLocale }) as I18nConfig;
