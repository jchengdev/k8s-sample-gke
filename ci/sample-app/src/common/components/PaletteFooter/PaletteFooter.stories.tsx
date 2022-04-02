import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import PaletteFooter from '.';

export default {
  title: 'Components/PaletteFooter',
  component: PaletteFooter,
  argTypes: {},
} as ComponentMeta<typeof PaletteFooter>;

const Template: ComponentStoryFn<typeof PaletteFooter> = args => (
  <PaletteFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  paletteName: 'Palette Name',
  emoji: ':)',
};
