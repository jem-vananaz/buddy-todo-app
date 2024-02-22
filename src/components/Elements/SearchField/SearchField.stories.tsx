import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import SearchField, { SearchFieldProps } from './SearchField';
import styled from 'styled-components';

const meta: Meta = {
  title: 'Components/SearchField',
  component: SearchField,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type StoryType = StoryObj<SearchFieldProps>;

const StoryContainer = styled.div`
  max-width: 320px;
`;

export const Default = (args: StoryType) => {
  const [value, setValue] = useState<string>('');

  const handleChange: SearchFieldProps['onChange'] = (newValue) => {
    setValue(newValue);
  };

  return (
    <StoryContainer>
      <SearchField {...args} value={value} onChange={handleChange} />
    </StoryContainer>
  );
};

Default.args = {
  placeholder: 'Search something here...',
};
