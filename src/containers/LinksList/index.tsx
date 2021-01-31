import useTranslation from 'next-translate/useTranslation';
import { Link, useLinksListQuery } from './LinksList.graphql';

const LinksList: React.FC = () => {
  const { loading, error, data } = useLinksListQuery();
  const { t } = useTranslation('page-links');

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error {error}...</div>;
  }

  const links = data!.links as [Link];
  const count = links.length;
  return (
    <div>
      <div>{t('link-count', { count })} </div>

      {count > 0 && (
        <ul>
          {links.map(({ id, title, url }) => (
            <li key={id}>
              <a href={url} rel="noreferrer" target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LinksList;

export { LinksListDocument } from './LinksList.graphql';
