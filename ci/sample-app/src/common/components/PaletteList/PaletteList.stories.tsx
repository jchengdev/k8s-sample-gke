import type { ComponentStory, ComponentMeta } from '@storybook/react';

import PaletteList from '.';
import seeds from '@/common/_seeds';

export default {
  title: 'Components/PaletteList',
  component: PaletteList,
  argTypes: {},
} as ComponentMeta<typeof PaletteList>;

const Template: ComponentStory<typeof PaletteList> = args => (
  <PaletteList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  palettes: seeds,
  deletePalette: (id: string) => {
    alert(`DELETE PALETTE ID: ${id}`);
  },
};
