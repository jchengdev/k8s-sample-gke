import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import ColorPickerForm from '.';

import seeds from '@/common/_seeds';

export default {
  title: 'Components/ColorPickerForm',
  component: ColorPickerForm,
  argTypes: {
    addNewColor: { action: 'ADD NEW COLOR' },
  },
} as ComponentMeta<typeof ColorPickerForm>;

const Template: ComponentStoryFn<typeof ColorPickerForm> = args => (
  <div
    style={{ top: '10px', marginLeft: '10px', height: '20vh', width: '30vw' }}
  >
    <ColorPickerForm {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  paletteIsFull: false,
  colors: seeds[0]?.colors,
};
