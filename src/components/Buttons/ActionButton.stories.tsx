import { StoryObj, Meta } from'@storybook/react';
import ActionButton, { ActionButtonProps } from './ActionButton';

const meta: Meta<ActionButtonProps> = {
  title: 'Components/ActionButton',
  component: ActionButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
  
export default meta;
type Story = StoryObj<ActionButtonProps>;

export const Update: Story = {
  args: {
    label: 'Update',
  },
};

export const Delete: Story = {
  args: {
    label: 'Delete',
  },
};
