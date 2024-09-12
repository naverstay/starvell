import Head from 'next/head'
import React, {ReactNode, useCallback, useEffect} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import {usePathname} from 'next/navigation'
import ModalDialog from "@/components/ModalDialog/ModalDialog";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setModalOpen} from "@/store/modalSlice";
import {clsx} from "clsx";
import Claim from "@/components/Claim";

export default function Layout({children}: { children: ReactNode }) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);

  const closeModal = useCallback(() => {
    //@###ts-expect-error
    dispatch(setModalOpen(false))
  }, [dispatch])

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
  }, [pathname])

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta name="description" content={'page description'}/>
      </Head>
      <ModalDialog isOpen={modal.isOpen} close={() => {
        closeModal();
      }}>
        <Claim/>
      </ModalDialog>
      <div
        className={clsx("min-h-[100vh] transition duration-300 ease-out flex flex-col relative", {"blur-[2px]": modal.isOpen})}>
        <Header/>
        <main className="min-h-full flex items-center py-6 flex flex-col smooth-scroll mx-auto grow w-[100%]"
              id="layout">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}
