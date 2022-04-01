import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import PaletteFormNav from '.';

import seeds from '@/common/_seeds';

export default {
  title: 'Components/PaletteFormNav',
  component: PaletteFormNav,
  argTypes: {
    handleDrawerOpen: { action: 'HANDLE DRAWER OPEN' },
    handleSubmit: { action: 'SAVE NEW PALETTE' },
  },
} as ComponentMeta<typeof PaletteFormNav>;

const Template: ComponentStoryFn<typeof PaletteFormNav> = args => (
  <PaletteFormNav {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: false,
  palettes: seeds,
};
