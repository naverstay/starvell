import Head from 'next/head'
import {ReactNode, useEffect} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import {useSharedState} from '@/hooks/useSharedState'
import {usePathname} from 'next/navigation'

export const useIsMobile = () => {
  return useSharedState('isMobile', false)[0]
}

export default function Layout({children}: { children: ReactNode }) {
  const isFixedBtnActive = useSharedState('scrollTopBtnDismissed', true)[0]
  const setIsMobile = useSharedState('isMobile', false)[1]
  const [switchMeta, setSwitchMeta] = useSharedState('switchMeta', true)
  const pathname = usePathname()
  useEffect(() => {
    const handle = () => {
      setIsMobile(window.innerWidth < 1024)
      setSwitchMeta(window.innerWidth > 390)
    }
    handle()
    window.addEventListener('resize', handle)

    return () => window.removeEventListener('resize', handle)
  }, [])
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
  }, [pathname])

  return (
    <>
      <Head>
        <title>{{title: 'page title'}}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta name="description" content={{description: 'page description'}}/>

        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </Head>
      <div className="min-h-[100vh] flex flex-col relative">
        <Header/>
        <main className="min-h-full flex flex-col smooth-scroll mx-auto grow w-[100%] max-w-[100vw]" id="layout">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}
