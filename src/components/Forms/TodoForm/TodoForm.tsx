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
  todoValue: string;
  onTodoValueChange: (value: string) => void;
  onAction?: (todoValue: string) => void;
  initialValue?: string;
  disabled?: boolean;
  notificationVisible?: boolean;
  notificationMessage?: string;
  notificationDuration?: number;
}

const TodoForm = ({
  title,
  todoValue,
  onTodoValueChange,
  onAction,
  disabled,
  notificationVisible = false,
  notificationMessage = '',
  notificationDuration = 3000,
}: TodoFormProps) => {
  const handleChange = (newValue: string) => {
    onTodoValueChange(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onAction) {
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
      <TextFieldWrapper>
        <TextField
          value={todoValue}
          onChange={handleChange}
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
    </Header>
  );
};

export default TodoForm;
