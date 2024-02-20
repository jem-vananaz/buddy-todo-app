import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

const meta: Meta = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    onChange: { action: 'changed' },
    onClear: { action: 'cleared' },
  },
};

export default meta;

type StoryType = StoryObj<typeof TextField>;

export const Default = (args: StoryType) => {
  const [value, setValue] = useState<string>('');

  const handleChange: TextFieldProps['onChange'] = (newValue) => {
    setValue(newValue);
  };

  const handleClear: TextFieldProps['onClear'] = () => {
    setValue('');
  };

  return (
    <TextField
      {...args}
      value={value}
      onChange={handleChange}
      onClear={handleClear}
    />
  );
};

Default.args = {
  placeholder: 'Type something here...',
};
