import { Header, TitleRow, HeaderTitle, TextFieldWrapper } from './elements';
import TextField from '@/components/TextField/TextField';

export interface AddTodoProps {
  textFieldValue?: string;
  setTextFieldValue?: (newValue: string) => void;
}

const AddTodo = ({ textFieldValue, setTextFieldValue }: AddTodoProps) => {
  return (
    <Header>
      <TitleRow>
        <HeaderTitle>Add to do</HeaderTitle>
      </TitleRow>
      <TextFieldWrapper>
        <TextField
          value={textFieldValue || ''}
          onChange={(newValue) => setTextFieldValue(newValue)}
          placeholder="Enter to-do item"
        />
      </TextFieldWrapper>
    </Header>
  );
};

export default AddTodo;
