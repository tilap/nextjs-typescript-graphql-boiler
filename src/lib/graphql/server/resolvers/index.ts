import { GraphQLDate } from 'graphql-iso-date';
import { ResolverContextApi } from 'lib/graphql/universalApolloClient';
import { QueryResolvers } from './type-defs.graphqls';

const Query: Required<QueryResolvers<ResolverContextApi>> = {
  links(_parent, _args, context, _info) {
    context.logger.child('resolver').child('link').info('processing');
    return context.services.links.getMany();
  },
};

export default {
  Query,
  Date: GraphQLDate,
  /* , Mutation */
};
