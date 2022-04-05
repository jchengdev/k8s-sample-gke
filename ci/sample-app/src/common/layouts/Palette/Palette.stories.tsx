import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import Palette from '.';

import { generatePalette } from '@/common/utils/color-helpers';
import seeds from '@/common/_seeds';
const paletteSample = generatePalette(
  seeds[0] || {
    paletteName: 'dummy-palette-name',
    id: 'dummy-palette',
    emoji: '(:emoji)',
    colors: [
      { name: 'red', color: '#F44336' },
      { name: 'pink', color: '#E91E63' },
      { name: 'purple', color: '#9C27B0' },
      { name: 'deeppurple', color: '#673AB7' },
      { name: 'indigo', color: '#3F51B5' },
    ],
  }
);

export default {
  title: 'Layouts/Palette',
  component: Palette,
  argTypes: {
    format: { options: ['hex', 'rgb', 'rgba'], control: { type: 'radio' } },
    changeFormat: { action: 'CHANGE FORMAT' },
  },
} as ComponentMeta<typeof Palette>;

const Template: ComponentStoryFn<typeof Palette> = args => (
  <Palette {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  paletteName: 'Palette Name',
  id: 'palette-name',
  emoji: ':)',
  colors: paletteSample.colors,
};
