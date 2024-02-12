import React, { useState, useEffect } from 'react';
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

interface TodoComponentProps {
  title: string;
  onAction?: (todoValue: string) => void;
  actionNotificationMessage?: string;
  showTextField?: boolean;
  initialValue?: string;
}

const TodoComponent = ({
  title,
  onAction,
  actionNotificationMessage,
  showTextField = true,
  initialValue = '',
}: TodoComponentProps) => {
  const [todoValue, setTodoValue] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    setTodoValue(initialValue);
  }, [initialValue]);

  const handleChange = (newValue: string) => {
    setTodoValue(newValue);
  };

  const handleClear = () => {
    setTodoValue('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAction();
    }
  };

  const handleAction = () => {
    if (onAction) {
      onAction(todoValue);
    }

    if (actionNotificationMessage) {
      setNotification(actionNotificationMessage);
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
  };

  return (
    <Header>
      <TitleRow>
        <Link to="/">
          <BackIcon src={backIcon} alt="Back Icon" />
        </Link>
        <HeaderTitle>{title}</HeaderTitle>
      </TitleRow>
      {showTextField && ( // Only render TextField if showTextField is true
        <TextFieldWrapper>
          <TextField
            value={todoValue}
            onChange={handleChange}
            onClear={handleClear}
            onKeyDown={handleKeyDown}
          />
          {notification && <Notification message={notification} />}
        </TextFieldWrapper>
      )}
    </Header>
  );
};

export default TodoComponent;
