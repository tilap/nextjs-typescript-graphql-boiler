import { NormalizedCacheObject, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import LayoutBare from 'components/LayoutBare';
import LayoutDefault from 'components/LayoutDefault';
import { SiteProvider } from 'config/site/SiteContext';
import Metas from 'containers/Metas';
import { useApollo } from 'lib/graphql/universalApolloClient';

// eslint-disable-next-line import/no-unassigned-import
import 'nprogress/nprogress.css';

// Layout ----------------
export type LayoutType = 'default' | 'bare';

const getLayoutComponentFromLayoutType = (layout?: LayoutType): React.FC<AppProps> => {
  switch (layout) {
    case 'default':
      return LayoutDefault;
    case 'bare':
    default:
      return LayoutBare;
  }
};

// Progress bar on route change ----------------
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface PageProps {
  initialApolloState?: NormalizedCacheObject;
  layout?: LayoutType;
  pageId?: string;
}

const App: React.FC<AppProps> = ({ pageProps, ...rest }) => {
  const { initialApolloState, layout, pageId, ...pagePropsRest } = pageProps as PageProps;
  const apolloClient = useApollo(initialApolloState);
  const LayoutComponent = getLayoutComponentFromLayoutType(layout);

  return (
    <SiteProvider>
      <ApolloProvider client={apolloClient}>
        <Metas pageId={pageId} />
        <LayoutComponent pageProps={pagePropsRest} {...rest} />
      </ApolloProvider>
    </SiteProvider>
  );
};

export default App;
