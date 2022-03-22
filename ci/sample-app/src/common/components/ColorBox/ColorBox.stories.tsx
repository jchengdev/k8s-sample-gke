import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColorBox from './index';

export default {
  title: 'Components/ColorBox',
  component: ColorBox,
  argTypes: {
    background: { control: 'color' },
  },
} as ComponentMeta<typeof ColorBox>;

const Template: ComponentStory<typeof ColorBox> = args => (
  <ColorBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Primary',
  moreUrl: '',
  showingFullPalette: false,
};
