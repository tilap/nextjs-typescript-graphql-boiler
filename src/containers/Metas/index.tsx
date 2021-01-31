import useTranslation from 'next-translate/useTranslation';
import FaviconMetas from 'components/FaviconMetas';
import PageMetas from 'components/PageMetas';
import { useSite } from 'config/site/SiteContext';

interface MetasProps {
  pageId?: string;
}

const Metas: React.FC<MetasProps> = ({ pageId }): JSX.Element | null => {
  const { t: tSite } = useTranslation('site');
  const { t: tPage } = useTranslation(`page-${pageId || ''}`);
  const { faviconRootUrl, url } = useSite();

  return (
    <>
      <PageMetas
        description={pageId ? tPage('metas.description') : ''}
        siteDescription={pageId ? tSite('metas.description') : ''}
        siteTitle={tSite('metas.title')}
        siteUrl={url}
        title={pageId ? tPage('metas.title') : ''}
      />
      <FaviconMetas rootUrl={faviconRootUrl} />
    </>
  );
};

export default Metas;
