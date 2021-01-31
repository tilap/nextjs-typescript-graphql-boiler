import Locale from 'lib/graphql/types/Locale';
import { graphql as logger } from 'loggers';
import Links from './server/services/Links';
import { ApolloContext } from './universalApolloClient';

interface CreateApolloAppContextProps {
  locale?: Locale;
}

// Create the appolo context related to the app
// Retuern a promise for later use if needed
const createApolloAppContext = ({ locale }: CreateApolloAppContextProps): Promise<ApolloContext | null> => {
  return Promise.resolve().then(() => {
    if (!locale) {
      return null;
    }

    return {
      app: { locale },
      services: {
        links: new Links({ locale }),
      },
      logger,
    };
  });
};

export default createApolloAppContext;
