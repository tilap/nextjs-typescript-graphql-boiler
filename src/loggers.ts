/* eslint-disable filenames/match-exported */
/* eslint-disable global-require */

import Logger, { configure } from 'nightingale';
import config from 'config/loggers';

const getConsoleHandler = () => {
  if (typeof window !== 'undefined') {
    const BrowserConsoleHandler = require('nightingale-browser-console').default;
    return BrowserConsoleHandler;
  }
  const ConsoleHandler = require('nightingale-console').default;
  return ConsoleHandler;
};

const Handler = getConsoleHandler();
configure([
  {
    handlers: [new Handler(config.level)],
  },
]);

export const logger = new Logger('app');
export const pages = logger.child('pages');
export const graphql = logger.child('graphql');
export const services = logger.child('services');

export const getPageLogger = (pageId: string): InstanceType<typeof Logger> => pages.child(pageId);
