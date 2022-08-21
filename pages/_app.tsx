import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
