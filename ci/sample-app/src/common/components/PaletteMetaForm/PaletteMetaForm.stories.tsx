import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import PaletteMetaForm from '.';

import seeds from '@/common/_seeds';

export default {
  title: 'Components/PaletteMetaForm',
  component: PaletteMetaForm,
  argTypes: {
    hideForm: { action: 'HIDE FORM' },
    handleSubmit: { action: 'SUBMIT NEW PALETTE' },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof PaletteMetaForm>;

const Template: ComponentStoryFn<typeof PaletteMetaForm> = args => (
  <div
    style={{
      height: '95vh',
      width: '95vw',
      backgroundColor: 'darkgray',
      border: '1px dashed black',
      borderRadius: '5px',
    }}
  >
    <span style={{ marginLeft: '5px', fontStyle: 'italic' }}>
      (PARENT COMPONENT)
    </span>
    <PaletteMetaForm {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  palettes: seeds,
};
