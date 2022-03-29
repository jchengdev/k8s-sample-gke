import type { ComponentStory, ComponentMeta } from '@storybook/react';

import MiniPalette from '.';

import seeds from '@/common/_seeds';

export default {
  title: 'Components/MiniPalette',
  component: MiniPalette,
  argTypes: {},
} as ComponentMeta<typeof MiniPalette>;

const Template: ComponentStory<typeof MiniPalette> = args => (
  <MiniPalette {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  goToPalette: (id: string) => {
    alert(`GO TO PALETTE: ${id}`);
  },
  openDialog: (id: string) => {
    alert(`OPEN DIALOG: ${id}`);
  },
  paletteName: 'Palette Name',
  id: 'palette-name',
  emoji: ':)',
  colors: seeds[0]?.colors,
};
