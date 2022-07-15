import type { AppPropsType, AppType } from 'next/dist/shared/lib/utils';
import type { PropsWithChildren } from 'react';
import type { EmotionCache } from '@emotion/cache';
import type { EmotionCriticalToChunks } from '@emotion/server/create-instance';
import createEmotionServer from '@emotion/server/create-instance';

import { createEmotionCache } from './createCache';

/**
 * * Runs on every page request (`getInitialProps`)
 * * resets the cache and creates a new `extractCriticalToChunks`
 */
const createServerInstance = (): {
  serverSideEmotionCache: EmotionCache;
  extractCriticalToChunks: (html: string) => EmotionCriticalToChunks;
} => {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  return { serverSideEmotionCache: cache, extractCriticalToChunks };
};

type EnhancedApp =
  | AppType
  | React.ComponentType<{ emotionCache: EmotionCache }>;

const emotionWrapper = (MyApp: EnhancedApp, cache: EmotionCache) => {
  return function EnhancedApp(props: PropsWithChildren<AppPropsType>) {
    console.log('EnhancedApp(props) called');
    return <MyApp emotionCache={cache} {...props} />;
  };
};

export { createServerInstance, emotionWrapper };
