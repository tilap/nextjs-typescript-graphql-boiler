import Locale from 'lib/graphql/types/Locale';
import Services from 'lib/graphql/types/Services';
import Links from './Links';

const factory = (locale: Locale): Services => {
  return {
    links: new Links({ locale }),
  };
};

export default factory;
