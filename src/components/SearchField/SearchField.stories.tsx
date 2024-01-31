import { StoryObj, Meta } from '@storybook/react';
import SearchField from './SearchField';

const meta: Meta = {
  title: 'Components/SearchField',
  component: SearchField,
  argTypes: {
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {},
};
