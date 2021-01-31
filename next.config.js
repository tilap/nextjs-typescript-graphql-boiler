const nextTranslate = require('next-translate');
const i18n = require('./i18n');

const nextI18n = {
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
};

module.exports = nextTranslate({
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,

  i18n: nextI18n,

  publicRuntimeConfig: {
    i18n: nextI18n,
    logsLevel: process.env.NODE_ENV === 'development' ? '0' : '400',
    siteUrl: process.env.SITE_URL || process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
  },
  serverRuntimeConfig: {},

  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    });
    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    });
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    });

    return config;
  },
});
