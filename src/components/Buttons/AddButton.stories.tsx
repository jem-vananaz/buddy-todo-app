import { StoryObj, Meta } from '@storybook/react';
import AddButton, { AddButtonProps } from './AddButton';

const meta: Meta<AddButtonProps> = {
  title: 'Components/AddButton',
  component: AddButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<AddButtonProps>;

export const Default: Story = {
  args: {},
};
