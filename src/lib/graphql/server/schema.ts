import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import graphQLLetConfig from '../../../../.graphql-let.yml';
import resolvers from './resolvers';

const loadedFiles = loadFilesSync(join(process.cwd(), graphQLLetConfig.schema));
const typeDefs = mergeTypeDefs(loadedFiles);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
