/* eslint-disable global-require */
import { IncomingMessage, ServerResponse } from 'http';
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import Logger from 'nightingale';
import { useMemo } from 'react';
import ServicesContext from 'lib/graphql/types/Services';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type AppContext = {
  locale?: string;
};

export interface ApolloContext {
  app: AppContext;
  logger: InstanceType<typeof Logger>;
  services: ServicesContext;
}

export type ResolverContextApi = ApolloContext & {
  req?: IncomingMessage;
  res?: ServerResponse;
};

function createIsomorphLink(context: ResolverContextApi | null) {
  // SSR client with direct link
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema');
    const schema = require('./server/schema').default;
    return new SchemaLink({ schema, context });
  }
  // For browser clients
  const { HttpLink } = require('@apollo/client');
  return new HttpLink({
    uri: '/api/graphql/',
    credentials: 'same-origin',
  });
}

function createApolloClient(context: ResolverContextApi | null) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(context),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState?: NormalizedCacheObject,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send a custom context which will be used by `SchemaLink` to server render pages
  context: ResolverContextApi | null = null,
): ApolloClient<NormalizedCacheObject> {
  const localApolloClient = apolloClient || createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state get hydrated here
  if (initialState) {
    localApolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return localApolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = localApolloClient;
  }

  return localApolloClient;
}

export function useApollo(initialState?: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState, null), [initialState]);
  return store;
}
