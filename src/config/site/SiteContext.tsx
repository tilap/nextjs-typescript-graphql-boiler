import { useContext, createContext } from 'react';
import site, { SiteConfig } from '.';

const SiteContext = createContext<SiteConfig>({} as SiteConfig);

export default SiteContext;

export const SiteProvider: React.FC = (props) => {
  return <SiteContext.Provider value={site} {...props} />;
};

export const useSite = (): SiteConfig => {
  return useContext(SiteContext);
};
