import { AppProps } from 'next/app';
import Link from 'next/link';

const LayoutDefault = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <div style={{ background: '#eaebea', padding: 10 }}>
        <Link href="/">home</Link>&nbsp;|&nbsp;<Link href="/about/">about</Link>&nbsp;|&nbsp;
        <Link href="/links/">links</Link>
      </div>
      <div style={{ padding: 10 }}>
        <Component {...pageProps} />
      </div>
      <div style={{ background: '#ccc', padding: 10 }}>Footer</div>
    </>
  );
};

export default LayoutDefault;
