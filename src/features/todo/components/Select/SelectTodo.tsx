import { Link } from 'react-router-dom';
import { Header, TitleRow, HeaderTitle, BackIcon } from './elements';
import backIcon from '@/assets/back-icon.svg';
import EmptyTodoList from '@/components/EmptyTodo/EmptyTodoList';

const SelectTodo = () => (
  <Header>
    <TitleRow>
      <Link to="/">
        <BackIcon src={backIcon} alt="Back Icon" />
      </Link>
      <HeaderTitle>Select to do</HeaderTitle>
    </TitleRow>
    <EmptyTodoList forSelection={true} />
  </Header>
);

export default SelectTodo;
