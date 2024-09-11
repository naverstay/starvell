import '@/fonts/Inter-4.0/web/inter.css'
// import '@/styles/_reset.css'
import '@/styles/globals.css'
import React from 'react';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {store} from '@/store/store';
import Layout from "@/components/Layout";


const App = ({Component, pageProps}: AppProps) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export default App;
