import type { ComponentStory, ComponentMeta } from '@storybook/react';

import NewPaletteForm from '.';

import seeds from '@/common/_seeds';

export default {
  title: 'Layouts/NewPaletteForm',
  component: NewPaletteForm,
  argTypes: {
    savePalette: { action: 'SAVE PALETTE' },
  },
} as ComponentMeta<typeof NewPaletteForm>;

const Template: ComponentStory<typeof NewPaletteForm> = args => (
  <NewPaletteForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  palettes: seeds,
  maxColors: 20,
};
