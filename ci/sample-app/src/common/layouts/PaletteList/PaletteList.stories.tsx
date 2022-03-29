import type { ComponentStory, ComponentMeta } from '@storybook/react';

import PaletteList from '.';

import seeds from '@/common/_seeds';

export default {
  title: 'Layouts/PaletteList',
  component: PaletteList,
  argTypes: {
    goToPalette: { action: 'GO TO PALETTE' },
    deletePalette: { action: 'DELETE PALETTE' },
  },
} as ComponentMeta<typeof PaletteList>;

const Template: ComponentStory<typeof PaletteList> = args => (
  <PaletteList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  palettes: seeds,
};
