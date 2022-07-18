import type { AppProps } from 'next/app';

import type { EmotionCache } from '@emotion/cache';
import { createEmotionCache } from '@/ssr/emotion/createCache';

import { GlobalContainer } from '@/common/containers/GlobalContainer';

// Client-side cache, shared for the whole session of the user in the browser.
// ! IMPORTANT: make sure this only runs once, as multiple runs may produce different style hashes
const clientSideEmotionCache: EmotionCache = (() => {
  console.log('clientSideEmotionCache() called');
  return createEmotionCache();
})();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => {
  return (
    <GlobalContainer emotionCache={emotionCache}>
      <Component {...pageProps} />
    </GlobalContainer>
  );
};

export default MyApp;
