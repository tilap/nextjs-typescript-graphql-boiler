import type { NextApiRequest } from 'next';
import i18nConfig from 'config/i18n';
import Locale from 'lib/graphql/types/Locale';

/**
 *  Extract locale from nextjs server request based on the referer.
 *  If none, return the default one
 */
const getLocaleFromServerRequest = (req: NextApiRequest): Locale => {
  const { defaultLocale, locales } = i18nConfig;

  const referer = req?.headers?.referer;
  const origin = req?.headers?.origin;
  if (!referer || !origin) {
    return defaultLocale;
  }

  const pathname = referer.replace(origin, '');
  return locales.reduce((res, locale) => {
    if (pathname.startsWith(`/${locale}/`)) {
      return locale;
    }

    return res;
  }, defaultLocale);
};

export default getLocaleFromServerRequest;
