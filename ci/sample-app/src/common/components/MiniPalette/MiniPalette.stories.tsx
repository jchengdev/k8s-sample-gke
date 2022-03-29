import type { ComponentStory, ComponentMeta } from '@storybook/react';

import MiniPalette from '.';

import seeds from '@/common/_seeds';

export default {
  title: 'Components/MiniPalette',
  component: MiniPalette,
  argTypes: {
    goToPalette: { action: 'GO TO PALETTE' },
    openDialog: { action: 'OPEN DIALOG' },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof MiniPalette>;

const Template: ComponentStory<typeof MiniPalette> = args => (
  <div style={{ height: '100px', width: '300px' }}>
    <MiniPalette {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  // goToPalette: (id: string) => {
  //   action(`GO TO PALETTE: ${id}`);
  // },
  // openDialog: (id: string) => {
  //   action(`OPEN DIALOG: ${id}`);
  // },
  paletteName: 'Palette Name',
  id: 'palette-name',
  emoji: ':)',
  colors: seeds[0]?.colors,
};
