import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Palette from '.';

import { generatePalette } from '@/common/utils/color-helpers';
import seeds from '@/common/_seeds';
const paletteSample = generatePalette(seeds[0]!);

export default {
  title: 'Layouts/Palette',
  component: Palette,
  argTypes: {},
} as ComponentMeta<typeof Palette>;

const Template: ComponentStory<typeof Palette> = args => <Palette {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  paletteName: 'Palette Name',
  id: 'palette-name',
  emoji: ':)',
  colors: paletteSample.colors,
};
