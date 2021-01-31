import { AppProps } from 'next/app';

const LayoutBare = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default LayoutBare;
