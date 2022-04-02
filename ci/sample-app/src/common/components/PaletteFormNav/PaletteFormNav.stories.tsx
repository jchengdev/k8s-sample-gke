import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import PaletteFormNav from '.';

// import seeds from '@/common/_seeds';

export default {
  title: 'Components/PaletteFormNav',
  component: PaletteFormNav,
  argTypes: {
    handleDrawerOpen: { action: 'HANDLE DRAWER OPEN' },
    // handleSubmit: { action: 'SAVE NEW PALETTE' },
    showMetaForm: { action: 'SHOW META FORM' },
  },
} as ComponentMeta<typeof PaletteFormNav>;

const Template: ComponentStoryFn<typeof PaletteFormNav> = args => (
  <PaletteFormNav {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: false,
  // palettes: seeds,
  metaFormShowing: false,
  renderMetaForm: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        height: '99.7vh',
        width: '99.7vw',
        opacity: 0.5,
        zIndex: 5000,
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',

        border: '1px dashed black',
        borderRadius: '5px',
        backgroundColor: 'lightgray',
      }}
    >
      META FORM
    </div>
  ),
};
