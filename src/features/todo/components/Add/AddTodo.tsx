import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  TitleRow,
  HeaderTitle,
  BackIcon,
  TextFieldWrapper,
} from './elements';
import backIcon from '@/assets/back-icon.svg';
import Notification from '@/components/Notification/Notification';
import TextField from '@/components/TextField/TextField';

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState('');
  const [notification, setNotification] = useState('');

  const handleChange = (newValue: string) => {
    setTodoValue(newValue);
  };

  const handleClear = () => {
    setTodoValue('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    // Add logic here for adding to do
    console.log('to do added: ', todoValue);

    setNotification('To do saved');
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <Header>
      <TitleRow>
        <Link to="/">
          <BackIcon src={backIcon} alt="Back Icon" />
        </Link>
        <HeaderTitle>Add to do</HeaderTitle>
      </TitleRow>
      <TextFieldWrapper>
        <TextField
          value={todoValue}
          onChange={handleChange}
          onClear={handleClear}
          onKeyDown={handleKeyDown}
        />
        {notification && <Notification message={notification} />}
      </TextFieldWrapper>
    </Header>
  );
};

export default AddTodo;
