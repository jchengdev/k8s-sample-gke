import * as React from 'react';
// import { withThemes } from '@react-theming/storybook-addon';
// import { ThemeProvider } from '@mui/material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// import theme from '@/styles/theme';

import ColorBox from './index';

export default {
  title: 'Components/ColorBox',
  component: ColorBox,
  // argTypes: {
  //   background: { control: 'color' },
  // },
  // decorators: [withThemes(ThemeProvider, [theme])],
} as ComponentMeta<typeof ColorBox>;

// const Template: ComponentStory<typeof ColorBox> = args => (
//   <ColorBox {...args} />
// );

// export const Primary = Template.bind({});
// Primary.args = {
//   name: 'Primary',
//   moreUrl: '',
//   showingFullPalette: false,
// };

export const Primary = () => (
  <ColorBox name="Primary" background="green" moreUrl="" />
);
