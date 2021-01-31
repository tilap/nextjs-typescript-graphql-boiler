const localesFolder = 'locales';

module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pages: {
    '*': ['common', 'site'],
    '/': ['page-home'],
    '/about': ['page-about'],
    '/links': ['page-links'],
  },
  logBuild: process.env.NODE_ENV === 'development',
  loadLocaleFrom: (lang, ns) => import(`./${localesFolder}/${lang}/${ns}.json`).then((m) => m.default),
};
