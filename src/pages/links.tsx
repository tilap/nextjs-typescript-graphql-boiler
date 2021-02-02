import { NextPage, GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import LinksList, { LinksListDocument } from 'containers/LinksList';
import createApolloAppContext from 'lib/graphql/createApolloAppContext';
import { initializeApollo } from 'lib/graphql/universalApolloClient';

const LinksPage: NextPage = () => {
  const { t } = useTranslation('page-links');
  return (
    <div>
      <div>{t('introduction')}</div>
      <LinksList />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const apolloContext = await createApolloAppContext({ locale });
  const apolloClient = initializeApollo(undefined, apolloContext);

  // Preload Links container data for SSR
  await apolloClient.query({ query: LinksListDocument });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      layout: 'default',
      pageId: 'links',
    },
  };
};

export default LinksPage;
