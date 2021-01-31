import Head from 'next/head';

interface FaviconMetasProps {
  rootUrl: string;
}

const FaviconMetas: React.FC<FaviconMetasProps> = ({ rootUrl }) => {
  const slash = rootUrl.endsWith('/') ? '' : '/';

  return (
    <Head>
      <link href={`${rootUrl}${slash}apple-touch-icon.png`} rel="apple-touch-icon" sizes="180x180" type="image/png" />
      <link href={`${rootUrl}${slash}favicon-32x32.png`} rel="icon" sizes="32x32" type="image/png" />
      <link href={`${rootUrl}${slash}favicon-16x16.png`} rel="icon" sizes="16x16" type="image/png" />
      <link href={`${rootUrl}${slash}site.webmanifest`} rel="manifest" />
    </Head>
  );
};

export default FaviconMetas;
