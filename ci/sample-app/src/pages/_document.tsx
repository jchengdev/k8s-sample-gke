import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { AppType } from 'next/dist/shared/lib/utils';

import type { EmotionCache } from '@emotion/cache';
import { createEmotionCache } from '@/common/ssr/emotion/createCache';
import createEmotionServer from '@emotion/server/create-instance';

import { COMMIT_SHA } from '@/common/_dev_notes';

interface ExtendedDocumentInitialProps extends DocumentInitialProps {
  emotionStyleTags: React.ReactNode[];
}

class MyDocument extends Document {
  /**
   * ! DON'T CHANGE `renderPage` or `getInitialProps` unless you're really sure what you're doing
   * * https://nextjs.org/docs/advanced-features/custom-document#customizing-renderpage
   */
  static override async getInitialProps(
    ctx: DocumentContext
  ): Promise<ExtendedDocumentInitialProps> {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    console.log(
      `_document.js getInitialProps(ctx) called: ${JSON.stringify(
        Object.assign({}, ctx, { req: null, res: null })
      )}`
    );

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const serverSideEmotionCache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(
      serverSideEmotionCache
    );

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (
          MyApp: AppType | React.ComponentType<{ emotionCache: EmotionCache }>
        ) =>
          function EnhanceApp(props) {
            console.log('EnhanceApp(props) called');
            return <MyApp emotionCache={serverSideEmotionCache} {...props} />;
          },
        // Useful for wrapping in a per-page basis
        enhanceComponent: Component => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    // console.log(`INITIALPROPSHTML: ${JSON.stringify(initialProps.html)}`);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    // console.log(`EMOTIONSTYLES: ${JSON.stringify(emotionStyles)}`);
    const emotionStyleTags = emotionStyles.styles.map(style => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  override render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <meta name="gitlab-tac-tac-string" content={`__${COMMIT_SHA}__`} />
          <link rel="icon" href="/favicon.ico" />
          {/* ! IMPORTANT: check createCache.ts meta name */}
          <meta name="emotion-insertion-point" content="" />
          {(styles => {
            // console.log(`INJECTED STYLES: ${JSON.stringify(styles)}`);
            return <>{styles}</>;
          })(
            (this.props as unknown as ExtendedDocumentInitialProps)
              .emotionStyleTags
          )}
          <meta name="emotion-insertion-point-end" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
