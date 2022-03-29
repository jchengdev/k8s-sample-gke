// import { addDecorator } from '@storybook/react';
// import { withThemes } from '@react-theming/storybook-addon';
// import { ThemeProvider } from '@mui/material';
// import { createTheme } from '@mui/material';

// import theme from '../src/styles/theme';

// const providerFn = ({ theme, children }) => {
//   const muTheme = createTheme(theme);
//   return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
// };

// pass ThemeProvider and array of your themes to decorator
// addDecorator(withThemes(null, [theme], { providerFn }));

import * as NextImage from 'next/image';
import '../src/styles/globals.css';

// unoptimize Next.js Images
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
