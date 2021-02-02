import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Children } from 'react';
import theme from 'config/theme';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta content={theme.palette.primary.main} name="theme-color" />
          {/* Google fonts */}
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
