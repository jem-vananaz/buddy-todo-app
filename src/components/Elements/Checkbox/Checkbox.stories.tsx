import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'changed' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type StoryType = StoryObj<CheckboxProps>;

export const Default = (args: StoryType) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log('Clicked');
  };

  return (
    <Checkbox
      {...args}
      id="checkbox"
      checked={checked}
      onChange={handleOnChange}
      onClick={handleClick}
    />
  );
};

Default.args = {};
