import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';
import styled from 'styled-components';

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

const StoryContainer = styled.div`
  max-width: 320px;
  padding: 20px;
`;

export const Default = (args: StoryType) => {
  const [value, setValue] = useState<string>('');

  const handleChange: TextFieldProps['onChange'] = (newValue) => {
    setValue(newValue);
  };

  const handleClear: TextFieldProps['onClear'] = () => {
    setValue('');
  };

  return (
    <StoryContainer>
      {' '}
      <TextField
        {...args}
        value={value}
        onChange={handleChange}
        onClear={handleClear}
      />
    </StoryContainer>
  );
};

Default.args = {
  placeholder: 'Type something here...',
};
