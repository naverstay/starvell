import '@/fonts/Inter-4.0/web/inter.css'
import '@/styles/globals.css'

import App, {AppContext, AppInitialProps, AppProps} from 'next/app'

import Layout from '@/components/Layout'

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

(MyApp as any).getInitialProps = async (
  context: AppContext
): Promise<{ user?: any } & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  return {...ctx} as any
}
