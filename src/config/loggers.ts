import getConfig from 'next/config';
import { levels } from 'nightingale';

const fallBackLevel = process.env.NODE_ENV === 'development' ? '0' : '400';
const level = getConfig().publicRuntimeConfig?.logsLevel || fallBackLevel;

export interface LoggersConfig {
  readonly level: levels;
}

export default Object.freeze({ level }) as LoggersConfig;
