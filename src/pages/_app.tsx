import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { AnimateSharedLayout } from 'framer-motion'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimateSharedLayout>
      <Head>
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
        <title>Matheus</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
