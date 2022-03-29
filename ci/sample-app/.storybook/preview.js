import { globalStyles } from '@/common/styles/globals';

/**
 * * GLOBAL styles added to all components/stories
 */
export const decorators = [
  Story => (
    <>
      {globalStyles}
      <Story />
    </>
  ),
];

import NextImage from 'next/image';

/**
 * * Unoptimize Next.js Images
 */
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

/**
 * * ADD-ONS configuration
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }, // onClick, onChange, etc
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};
