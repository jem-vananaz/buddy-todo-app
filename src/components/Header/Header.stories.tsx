import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import HeaderComponent, { HeaderProps } from './Header';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
} as Meta;

const Template: StoryObj<HeaderProps> = (args) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <HeaderComponent
      {...args}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  handleSelectButton: () => console.log('Select button clicked'),
  handleLogout: () => console.log('Logout button clicked'),
};
