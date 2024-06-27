// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/mtapLogo.png" />
          <link rel="canonical" href="https://mtap.byklabs.store/" />
          {/* <link rel="preload" href="/globals.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" /> */}
          {/* <noscript>
            <link rel="stylesheet" href="/globals.css" />
          </noscript> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
