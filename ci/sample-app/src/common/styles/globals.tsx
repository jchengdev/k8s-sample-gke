import { css, Global, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
// import { CssBaseline } from '@mui/material';

export const globalStyles = (
  <>
    {/* <CssBaseline /> */}
    {
      // ! global baseline (before rendering any <Component {...pageProps} />) should
      // ! be handled here instead of per-page or per-component (e.g. Palette)
      // TODO: switch CssBaseline for ScopedCssBaseline on those cases
      // * left that way because this is a ported app (with adjustments)
    }
    <Global
      styles={css({
        'html,body': {
          padding: 0,
          margin: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        code: {
          fontFamily:
            'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
        },
      })}
    />
  </>
);

/**
 * * https://github.com/vercel/next.js/blob/canary/examples/with-emotion/shared/styles.js
 */

export const basicStyles = css({
  backgroundColor: 'white',
  color: 'cornflowerblue',
  border: '1px solid lightgreen',
  borderRight: 'none',
  borderBottom: 'none',
  boxShadow: '5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow',
  transition: 'all 0.1s linear',
  margin: '3rem 0',
  padding: '1rem 0.5rem',
});

export const hoverStyles = css({
  '&:hover': {
    color: 'white',
    backgroundColor: 'lightgray',
    borderColor: 'aqua',
    boxShadow: '-15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue',
  },
});

export const bounce = keyframes({
  from: {
    transform: 'scale(1.01)',
  },
  to: {
    transform: 'scale(0.99)',
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Basic = styled('div')(({ theme }) => ({
  ...basicStyles,
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Combined = styled('div')(({ theme }) => ({
  ...basicStyles,
  ...hoverStyles,
  '& code': {
    backgroundColor: 'linen',
  },
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Animated = styled('div')(({ theme }) => ({
  ...basicStyles,
  ...hoverStyles,
  '& code': {
    backgroundColor: 'linen',
  },
  animation: '0.2s infinite ease-in-out alternate',
}));
