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
        <title>Matheus</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
