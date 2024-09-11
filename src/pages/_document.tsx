import React from 'react';

import type {DocumentContext} from 'next/document';
import Document, {Head, Html, Main, NextScript} from 'next/document';

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
    <Main/>
    <NextScript/>
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
      </>
    ),
  };
};

export default MyDocument;
