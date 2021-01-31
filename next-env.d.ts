/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.graphqls' {
  import { DocumentNode } from 'lib/graphql';

  export default typeof DocumentNode;
}

declare module '*.yml';
