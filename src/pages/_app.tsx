import '@/fonts/Inter-4.0/web/inter.css'
// import '@/styles/_reset.css'
import '@/styles/globals.css'
import React from 'react';
import type {AppProps} from 'next/app';

import Layout from "@/components/Layout";

const App = ({Component, pageProps}: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;

