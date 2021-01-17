import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Desenvolvedor e bacharel em Ciência da Computação"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1"></meta>
          <meta name="theme-color" content="#121214"></meta>
          <meta
            name="google-site-verification"
            content="8DWed3M01OdncKl8OwUPrAc-9r87UGpK39i6bLXRxjo"
          />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
