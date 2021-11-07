/** @format */
// 参考にさせていただいた記事
// https://shinshin86.hateblo.jp/entry/2020/01/03/003000
import Document, { Html, Head, Main, NextScript } from "next/document";

const trackingId = "G-C5BVBPMH6Q";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {trackingId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
