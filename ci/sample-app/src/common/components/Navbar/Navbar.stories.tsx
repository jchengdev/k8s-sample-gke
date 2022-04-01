import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import NavBar from '.';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  argTypes: {
    onChangeLevel: { action: 'CHANGE LEVEL' },
    onChangeFormat: { action: 'CHANGE FORMAT' },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStoryFn<typeof NavBar> = args => (
  <NavBar
    {...args}
    level={500}
    minLevel={100}
    maxLevel={900}
    sliderStep={100}
  />
);

export const HEX = Template.bind({});
HEX.args = {
  showingAllColors: true,
  format: 'hex',
};

export const RGB = Template.bind({});
RGB.args = {
  showingAllColors: true,
  format: 'rgb',
};

export const RGBA = Template.bind({});
RGBA.args = {
  showingAllColors: true,
  format: 'rgba',
};
