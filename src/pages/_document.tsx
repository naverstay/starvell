import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="ru" className="">
      <Head/>
      <body className="bg-[#f7f7f7] mx-auto min-w-[1160px] max-w-[100vw] overflow-x-auto text-primary">
      <Main/>
      <div id="layout"/>
      <NextScript/>
      </body>
    </Html>
  )
}
