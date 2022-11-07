import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class SiteDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
					<meta name="description" content="Jesse van Bree is a developer based in Alkmaar, The Netherlands who specialises in Javascript, having experience with React, NextJS and Angular" />
					<meta name="keywords" content="Jesse van Bree, van Bree, Jesse, CV, frontend developer, front-end developer" />
					<meta name="author" content="Jesse van Bree" />
					<meta property="og:title" content="Jesse van Bree CV" />
					<meta property="og:description" content="Jesse van Bree is a developer based in Alkmaar, The Netherlands who specialises in Javascript, having experience with React, NextJS and Angular" />
					<meta property="og:type" content="website" />

					{/* TODO: <meta property="og:url" content="" /> */}
          {/* TODO: <meta name="theme-color" content="#34a26b" /> */}
					{/* TODO: <link rel="manifest" href="/manifest.json" /> */}

					<link rel="icon" href="/favicon.ico" />
				</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default SiteDocument


