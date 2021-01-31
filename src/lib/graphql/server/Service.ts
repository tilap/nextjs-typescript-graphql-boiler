import Locale from '../types/Locale';

export interface ServiceContext {
  locale: Locale;
}

class Service {
  context: ServiceContext;

  constructor({ locale }: { locale: Locale }) {
    this.context = { locale };
  }
}

export default Service;
