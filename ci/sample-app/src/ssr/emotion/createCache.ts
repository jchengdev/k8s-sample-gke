import createCache from '@emotion/cache';

import { EMOTION_CACHE_KEY, EMOTION_INSERTION_POINT } from './_constants';

const isBrowser = typeof document !== 'undefined';

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      `meta[name="${EMOTION_INSERTION_POINT}"]`
    );
    insertionPoint = emotionInsertionPoint ?? undefined;

    console.log(
      `BROWSER side, insertionPoint: ${emotionInsertionPoint?.outerHTML}`
    );
  }

  return createCache({ key: EMOTION_CACHE_KEY, insertionPoint });
}

export { createEmotionCache };
