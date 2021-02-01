const localesFolder = 'locales';

module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pages: {
    '*': ['common', 'site'],
    '/': ['page-home'],
    '/about': ['page-about'],
    '/links': ['page-links', 'container-LinksList'],
  },
  logBuild: process.env.NODE_ENV === 'development',
  loadLocaleFrom: (lang, ns) => {
    // Containers
    if (ns.startsWith('container-')) {
      const [_, containerName] = ns.split('-');
      return import(`./src/containers/${containerName}/${localesFolder}/${lang}.json`).then((m) => m.default);
    }
    // Globals
    return import(`./${localesFolder}/${lang}/${ns}.json`).then((m) => m.default);
  },
};
