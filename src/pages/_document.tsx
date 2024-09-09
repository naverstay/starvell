import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body className="font-primary mx-auto">
        <Main />
        <div id="layout" />
        <NextScript />
      </body>
    </Html>
  )
}
