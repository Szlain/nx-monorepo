import { Story, Meta } from '@storybook/react';
import { NxWelcome } from './nx-welcome';

export default {
  component: NxWelcome,
  title: 'Fuse Design System/Elements/nxWelcome',
} as Meta;

const Template: Story = (args) => <NxWelcome title={''} {...args} />;

export const Primary = Template.bind({});
Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N8hGBuklM9m4Turq55qlmW/Untitled?node-id=4%3A4',
    },
  },
};
Primary.args = {};
