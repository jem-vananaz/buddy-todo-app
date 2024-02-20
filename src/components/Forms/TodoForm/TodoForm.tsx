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

export interface TodoFormProps {
  title: string;
  onAction?: (todoValue: string) => void;
  showTextField?: boolean;
  initialValue?: string;
  clearTrigger?: boolean;
  onClear?: () => void;
  disabled?: boolean;
  notificationVisible?: boolean;
  notificationMessage?: string;
  notificationDuration?: number;
}

const TodoForm = ({
  title,
  onAction,
  showTextField = true,
  initialValue = '',
  clearTrigger = false,
  onClear,
  disabled,
  notificationVisible = false,
  notificationMessage = '',
  notificationDuration = 3000,
}: TodoFormProps) => {
  const [todoValue, setTodoValue] = useState(initialValue);

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
          {notificationVisible && (
            <Notification
              message={notificationMessage}
              duration={notificationDuration}
            />
          )}
        </TextFieldWrapper>
      )}
    </Header>
  );
};

export default TodoForm;
