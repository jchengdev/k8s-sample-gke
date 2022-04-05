import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import SingleColorPalette from '.';

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
  title: 'Layouts/SingleColorPalette',
  component: SingleColorPalette,
  argTypes: {
    format: { options: ['hex', 'rgb', 'rgba'], control: { type: 'radio' } },
    changeFormat: { action: 'CHANGE FORMAT' },
  },
} as ComponentMeta<typeof SingleColorPalette>;

const Template: ComponentStoryFn<typeof SingleColorPalette> = args => (
  <SingleColorPalette {...args} />
);

export const Red = Template.bind({});
Red.args = {
  palette: paletteSample,
  selectedColorId: seeds[0]?.colors[0]?.name || 'red',
  format: 'hex',
};

export const Indigo = Template.bind({});
Indigo.args = {
  palette: paletteSample,
  selectedColorId: seeds[0]?.colors[4]?.name || 'indigo',
  format: 'hex',
};
