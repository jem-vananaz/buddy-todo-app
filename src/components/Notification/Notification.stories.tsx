import { StoryObj, Meta } from '@storybook/react';
import Notification from './Notification';

const meta: Meta = {
  title: 'Components/Notification',
  component: Notification,
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    message: 'To do saved',
  },
};
