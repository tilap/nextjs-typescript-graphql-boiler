import Logger from 'nightingale';
import Locale from '../types/Locale';

export interface ServiceContext {
  locale: Locale;
}

interface ServiceProps {
  locale: Locale;
  logger: InstanceType<typeof Logger>;
}

class Service {
  context: ServiceContext;

  logger: InstanceType<typeof Logger>;

  constructor({ locale, logger }: ServiceProps) {
    this.context = { locale };
    this.logger = logger;
  }
}

export default Service;
