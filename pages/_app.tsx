import React from 'react';
import { AppProps } from 'next/app';

import '@/styles/global.css';
// import '@/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
