import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class SiteDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
					<meta name="description" content="I am a developer based in The Netherlands who specialises in web development. I mainly work with Next,js and React, and have experience with React native, Angular, Node.js, Ruby on Rails and MySQL." />
					<meta name="keywords" content="Jesse van Bree, van Bree, Jesse, CV, frontend developer, front-end developer" />
					<meta name="author" content="Jesse van Bree" />
					<meta property="og:title" content="Jesse van Bree CV" />
					<meta property="og:description" content="I am a developer based in The Netherlands who specialises in web development. I mainly work with Next,js and React, and have experience with React native, Angular, Node.js, Ruby on Rails and MySQL." />
					<meta property="og:type" content="website" />

					<link rel="manifest" href="/manifest.json" />
					{/* TODO: <meta property="og:url" content="" /> */}
          {/* TODO: <meta name="theme-color" content="#34a26b" /> */}

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


