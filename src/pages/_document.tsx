import React from 'react';
import {createCache, extractStyle, StyleProvider} from '@ant-design/cssinjs';
import type {DocumentContext} from 'next/document';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {AntdRegistry} from "@ant-design/nextjs-registry";
import Script from "next/script";

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico"/>

      <script
        dangerouslySetInnerHTML={{
          __html: `history.scrollRestoration = "manual"`,
        }}
      />
    </Head>
    <body className="bg-[#f7f7f7] mx-auto min-w-[1160px] max-w-[100vw] overflow-x-auto text-primary">
    <AntdRegistry>
      <Main/>
      <NextScript/>
    </AntdRegistry>
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{__html: style}}/>
      </>
    ),
  };
};

export default MyDocument;
