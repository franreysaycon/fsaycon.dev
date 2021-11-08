import React from "react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import stitches from "../stitches"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/abril-fatface/abril-fatface-latin-400.woff2"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/quattrocento-sans/quattrocento-sans-latin-400.woff2"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/quattrocento-sans/quattrocento-sans-latin-400italic.woff2"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/quattrocento-sans/quattrocento-sans-latin-700.woff2"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/quattrocento-sans/quattrocento-sans-latin-700italic.woff2"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/quattrocento-sans/quattrocento-sans-latin-400.woff2"
            crossOrigin="true"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: stitches.getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
