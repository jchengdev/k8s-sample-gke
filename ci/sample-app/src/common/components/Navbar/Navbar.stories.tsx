import type { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from '.';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = args => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  level: 500,
  minLevel: 100,
  maxLevel: 900,
  sliderStep: 100,
  onChangeLevel: (newLevel: number | number[]) => {
    alert(`NEW LEVEL: ${newLevel}`);
  },
  showingAllColors: true,
  format: 'hex',
  onChangeFormat: (newFormat: string) => {
    alert(`NEW FORMAT: ${newFormat}`);
  },
};
