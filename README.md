# Nextjs boilerplate

This repo is a nextjs playground I used to learn the nextjs basics. I share it
to remember some stuff and in case it helps anyone.

## Feature

- Data fetching with
  - business services
  - full isomorphic support (browser, ssr, ssg)
- Basic per page SEO metas
- Multi layout (page level)
- Favicon generator from a master image
- Page loading indicator
- Multi languages (i18n)
- No frontent framwork for styling

## Technically

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Graphql](https://graphql.org/) working on browser, SSR and SSG
  - an isomorphic graphql client for nextjs browser/static/server
  - an api route `/api/graphql` with graphql server based on [apollo-server-micro](https://www.npmjs.com/package/apollo-server-micro)
  - [graphql-let](https://www.npmjs.com/package/graphql-let) to generate types
for typescript and easy react hooks with hrm.
  - a business logic achieved thanks to business services
- Code style with:
  - [eslint](https://www.npmjs.com/package/eslint)
  - [prettier](https://www.npmjs.com/package/prettier)
  - Clean commits with [Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/):
    - [commitlint](https://www.npmjs.com/package/@commitlint/cli)
    - [commitizen](https://www.npmjs.com/package/commitizen) to help writting
commit messages according to conventional commits
  - [Husky hooks](https://www.npmjs.com/package/husky) to run linters and tests
  - Types checking with tsc
- Absolute import
- Favicon generator with [real-favicon](https://www.npmjs.com/package/cli-real-favicon)
- Page loading indicator with [nprogress](https://www.npmjs.com/package/nprogress)
- i18n with native nextjs and [next-translate](https://www.npmjs.com/package/next-translate)
- isomorphic loggers thanks to [nightingale](https://github.com/christophehurpeau/nightingale)
- [jest](https://jestjs.io/) for testing with an example on a container
including data mock
