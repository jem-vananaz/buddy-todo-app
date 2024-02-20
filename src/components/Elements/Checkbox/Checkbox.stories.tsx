import { StoryObj, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type StoryType = StoryObj<CheckboxProps>;

export const Default: StoryType = {
  args: {
    checked: false,
    onChange: () => {},
  },
};
