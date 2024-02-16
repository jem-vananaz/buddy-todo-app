import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import EmptyTodoList, { EmptyTodoListProps } from './EmptyList';

const meta: Meta<EmptyTodoListProps> = {
  title: 'Components/EmptyTodoList',
  component: EmptyTodoList,
};

export default meta;

const Template: StoryObj<EmptyTodoListProps> = (args) => (
  <MemoryRouter>
    <EmptyTodoList {...args} />
  </MemoryRouter>
);

export const Default: StoryObj<EmptyTodoListProps> = Template.bind({});
Default.args = {};

export const ForSearchResult: StoryObj<EmptyTodoListProps> = Template.bind({});
ForSearchResult.args = {
  forSearchResult: true,
  children: 'No to do found. Try different keywords.',
};

export const ForSelection: StoryObj<EmptyTodoListProps> = Template.bind({});
ForSelection.args = {
  forSelection: true,
};
