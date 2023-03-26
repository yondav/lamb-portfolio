// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend

import type { DocumentContext } from 'next/document';
import Document from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        head: [
          <Fragment key='fonts'>
            <link rel='stylesheet' href='https://use.typekit.net/elr5mzn.css' />
          </Fragment>,
        ],
        styles: [
          <Fragment key='styles'>
            <meta name='viewport' content='width=device-width' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1, minimum-scale=1'
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
