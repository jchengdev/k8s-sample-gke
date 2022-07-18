import type { EmotionCriticalToChunks } from '@emotion/server/create-instance';
import { EMOTION_INSERTION_POINT } from './_constants';

const generateEmotionStyles = (
  html: string,
  stylesExtractor: (html: string) => EmotionCriticalToChunks
): JSX.Element[] => {
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  // console.log(`INITIALPROPSHTML: ${JSON.stringify(html)}`);
  const emotionStyles = stylesExtractor(html);
  // console.log(`EMOTIONSTYLES: ${JSON.stringify(emotionStyles)}`);
  const emotionStyleTags = emotionStyles.styles.map(
    (style: { key: string; ids: string[]; css: string }) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    )
  );

  return emotionStyleTags;
};

const injectEmotionStyles = (styles: React.ReactNode[]): JSX.Element => {
  console.log(`INJECTED STYLES: ${JSON.stringify(styles)}`);
  return (
    <>
      {styles}
      <meta name={EMOTION_INSERTION_POINT + '-end'} content="" />
    </>
  );
};

export { generateEmotionStyles, injectEmotionStyles };
