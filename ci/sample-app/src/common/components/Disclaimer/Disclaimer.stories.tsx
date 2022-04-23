import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

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

const Template: ComponentStoryFn<typeof Disclaimer> = args => (
  <Disclaimer {...args} />
);

export const MessageOnly = Template.bind({});
MessageOnly.args = {
  message: (
    <>
      {'Disclaimer for app credits'}
      <br />
    </>
  ),
};

export const WithLink = Template.bind({});
WithLink.args = {
  message: (
    <>
      {'Disclaimer for app credits'}
      <br />
      {
        <a target={'_blank'} href={'https://www.google.com'} rel="noreferrer">
          https://www.google.com
        </a>
      }
      <br />
    </>
  ),
};
