import { StoryObj, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Select: Story = {
  args: {
    label: 'Select',
  },
};
