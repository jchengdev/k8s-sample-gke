import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import PaletteList from '.';

import seeds from '@/common/_seeds';
import bg from '@/assets/images/bg.svg';

export default {
  title: 'Layouts/PaletteList',
  component: PaletteList,
  argTypes: {
    goToPalette: { action: 'GO TO PALETTE' },
    deletePalette: { action: 'DELETE PALETTE' },
  },
} as ComponentMeta<typeof PaletteList>;

const Template: ComponentStoryFn<typeof PaletteList> = args => (
  <PaletteList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  renderBackground: () => (
    <div
      style={{
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        zIndex: 0,
      }}
    />
  ),
  palettes: seeds,
};
