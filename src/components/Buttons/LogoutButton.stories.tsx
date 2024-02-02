import { StoryObj, Meta } from '@storybook/react';
import LogoutButton, { LogoutButtonProps } from './LogoutButton';

const meta: Meta<LogoutButtonProps> = {
  title: 'Components/Buttons',
  component: LogoutButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<LogoutButtonProps>;

export const Logout: Story = {
  args: {},
};
