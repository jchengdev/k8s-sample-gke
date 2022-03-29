import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from '.';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <div
    style={{
      padding: '1rem',
      height: 'auto',
      width: 'auto',
      border: '1px dashed black',
      borderRadius: '5px',
    }}
  >
    <Link {...args}>STORYBOOK MODE IS ON</Link>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  href: '/stop-propagation',
};
