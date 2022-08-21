import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import '../public/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
