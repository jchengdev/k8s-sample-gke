// import { withThemes } from '@react-theming/storybook-addon';
// import { ThemeProvider } from '@mui/material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// import theme from '@/styles/theme';
// ? comments left for reference, in case themes become a requirement in the project

import ColorBox from '.';

export default {
  title: 'Components/ColorBox',
  component: ColorBox,
  argTypes: {
    background: { control: 'color' },
  },
  // decorators: [withThemes(ThemeProvider, [theme])],
} as ComponentMeta<typeof ColorBox>;

const Template: ComponentStory<typeof ColorBox> = args => (
  <div style={{ height: '90vh' }}>
    <ColorBox {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Primary',
  background: '#f3f3f3',
  moreUrl: '/some-monocolor-palette',
  showingFullPalette: false,
};
