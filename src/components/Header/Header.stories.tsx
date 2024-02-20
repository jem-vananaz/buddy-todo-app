import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HeaderComponent, { HeaderProps } from './Header';

const meta: Meta<HeaderProps> = {
  title: 'Components/Header',
  component: HeaderComponent,
  argTypes: {
    handleSelectButton: { action: 'selectButtonClicked' },
    handleLogout: { action: 'logoutClicked' },
  },
};

export default meta;

type StoryType = StoryObj<HeaderProps>;

type TemplateArgs = Omit<HeaderProps, 'searchKeyword' | 'setSearchKeyword'> & {
  searchKeyword?: string;
};

const Template = ({ searchKeyword, ...args }: TemplateArgs) => (
  <HeaderComponent searchKeyword={searchKeyword || ''} {...args} />
);

export const Default: StoryType = Template;
Default.args = {
  searchKeyword: '',
  handleSelectButton: action('selectButtonClicked'),
  handleLogout: action('logoutClicked'),
};
