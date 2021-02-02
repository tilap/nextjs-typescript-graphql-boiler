import { NextPage, GetStaticProps } from 'next';

import useTranslation from 'next-translate/useTranslation';
import { getPageLogger } from 'loggers';

const logger = getPageLogger('home');

const IndexPage: NextPage = () => {
  logger.warn('a log while rendering');
  const { t } = useTranslation('page-home');
  return <div>{t('hello')}</div>;
};

// eslint-disable-next-line require-await
export const getStaticProps: GetStaticProps = async (context) => {
  logger.debug('Some debug message from the getStaticProps', { context });
  return {
    props: {
      layout: 'default', // use a custom layout
      pageId: 'home', // usefull for page metas from translations files
    },
  };
};

export default IndexPage;
