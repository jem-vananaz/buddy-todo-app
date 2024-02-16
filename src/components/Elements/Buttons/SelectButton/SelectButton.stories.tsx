import { StoryObj, Meta } from '@storybook/react';
import SelectButton, { SelectButtonProps } from './SelectButton';

const meta: Meta<SelectButtonProps> = {
  title: 'Components/Buttons',
  component: SelectButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<SelectButtonProps>;

export const Select: Story = {
  args: {},
};
