import { ApolloServer } from 'apollo-server-micro';
import getLocaleFromServerRequest from 'lib/getLocaleFromServerRequest';
import createApolloAppContext from 'lib/graphql/createApolloAppContext';
import schema from 'lib/graphql/server/schema';

// TODO: add logger here
const apolloServer = new ApolloServer({
  schema,
  context: (req) => {
    const locale = getLocaleFromServerRequest(req);
    return createApolloAppContext({ locale });
  },
});

export default apolloServer.createHandler({ path: '/api/graphql/' });

// Nextjs route config
export const config = {
  api: {
    bodyParser: false,
  },
};
