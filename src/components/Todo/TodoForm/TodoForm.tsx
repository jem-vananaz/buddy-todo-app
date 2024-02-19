import React, { useState, useEffect, useCallback } from 'react';
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
import TextField from '@/components/Elements/TextField/TextField';

interface TodoFormProps {
  title: string;
  onAction?: (todoValue: string) => void;
  actionNotificationMessage?: string;
  showTextField?: boolean;
  initialValue?: string;
  clearTrigger?: boolean;
  onClear?: () => void;
  disabled?: boolean;
}

const TodoForm = ({
  title,
  onAction,
  actionNotificationMessage,
  showTextField = true,
  initialValue = '',
  clearTrigger = false,
  onClear,
  disabled,
}: TodoFormProps) => {
  const [todoValue, setTodoValue] = useState(initialValue);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (clearTrigger) {
      setTodoValue('');
      if (onClear) {
        onClear();
      }
    }
  }, [clearTrigger, onClear]);

  const handleChange = (newValue: string) => {
    setTodoValue(newValue);
  };

  const handleClear = useCallback(() => {
    setTodoValue('');
    if (onClear) {
      onClear();
    }
  }, [onClear]);

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
      {showTextField && (
        <TextFieldWrapper>
          <TextField
            value={todoValue}
            onChange={handleChange}
            onClear={handleClear}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
          {notification && <Notification message={notification} />}
        </TextFieldWrapper>
      )}
    </Header>
  );
};

export default TodoForm;
