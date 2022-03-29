import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Disclaimer from '.';

export default {
  title: 'Components/Disclaimer',
  component: Disclaimer,
  argTypes: {
    onClose: { action: 'CLOSE DISCLAIMER' },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Disclaimer>;

const Template: ComponentStory<typeof Disclaimer> = args => (
  <Disclaimer {...args} />
);

export const MessageOnly = Template.bind({});
MessageOnly.args = {
  message: 'Disclaimer for app credits',
};

export const WithLink = Template.bind({});
WithLink.args = {
  message: 'Disclaimer for app credits',
  extLink: 'https://www.google.com',
};
