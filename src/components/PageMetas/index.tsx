import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

const langToIso = (lang?: string) => (lang ? `${lang}-${lang.toUpperCase()}` : '');

export interface PageMetasProps {
  siteUrl?: string | null;
  siteTitle?: string | null;
  siteDescription?: string | null;
  title?: string | null;
  description?: string | null;
}

const PageMetas: React.FC<PageMetasProps> = ({
  siteUrl,
  siteTitle,
  siteDescription,
  title,
  description,
}): JSX.Element => {
  const { pathname, asPath, locale, locales } = useRouter(); // TODO: move it in the container, check if pathname and asPath are relevant
  const pageTitle = [title, siteTitle].filter(Boolean).join(' | '); // TODO Cut if too long by removing site title
  const pageDescripotion = description || siteDescription; // TODO: play with content length

  const makeFullUrl = useCallback((path: string): string => [siteUrl, path].filter(Boolean).join(''), [siteUrl]);

  const fullUrl = makeFullUrl(pathname);

  const alternateLocalesUrls = useMemo(() => {
    if (!locales) {
      return [];
    }

    return locales
      .filter((l) => l !== locale)
      .map((availableLocale) => {
        return {
          locale: availableLocale,
          isoLocale: langToIso(availableLocale),
          url: makeFullUrl(`/${availableLocale}${asPath}`),
        };
      });
  }, [asPath, locale, locales, makeFullUrl]);

  return (
    <Head>
      <title key="page-title">{pageTitle}</title>
      <meta content={pageTitle} key="og:title" property="og:title" />

      {fullUrl && <link href={fullUrl} rel="canonical" />}
      {fullUrl && <meta content={fullUrl} key="og:url" property="og:url" />}

      <meta content="website" key="og:type" property="og:type" />

      {pageDescripotion && <meta content={pageDescripotion} key="og:description" property="og:description" />}
      {pageDescripotion && <meta content={pageDescripotion} key="description" name="description" />}

      {siteTitle && <meta content={siteTitle} key="og:site_name" property="og:site_name" />}
      <meta content={langToIso(locale)} key="og:locale" property="og:locale" />

      {alternateLocalesUrls.map(({ locale: lang, isoLocale }) => (
        <meta content={isoLocale} key={`og:locale:alternate-${lang}`} property="og:locale:alternate" />
      ))}
      {alternateLocalesUrls.map(({ locale: lang, isoLocale, url: alternateLocalesUrl }) => (
        <link href={alternateLocalesUrl} hrefLang={isoLocale} key={`alternatelang-${lang}`} rel="alternate" />
      ))}
    </Head>
  );
};

export default PageMetas;
