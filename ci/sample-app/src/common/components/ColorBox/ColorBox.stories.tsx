import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import ColorBox from '.';

export default {
  title: 'Components/ColorBox',
  component: ColorBox,
  argTypes: {
    background: { control: 'color' },
  },
} as ComponentMeta<typeof ColorBox>;

const Template: ComponentStoryFn<typeof ColorBox> = args => (
  <div style={{ height: '90vh' }}>
    <ColorBox {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Primary',
  background: '#3e3e3e',
  moreUrl: '/some-monocolor-palette',
  showingFullPalette: false,
};
