import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

if (publicRuntimeConfig.siteUrl.endsWith('/')) {
  throw new Error('siteUrl config must not end with a slash');
}

export interface SiteConfig {
  readonly url: string;
  readonly faviconRootUrl: string;
}

const site: SiteConfig = Object.freeze({
  url: publicRuntimeConfig.siteUrl,
  faviconRootUrl: `${publicRuntimeConfig.siteUrl}/favicon/`,
});

export default site;
