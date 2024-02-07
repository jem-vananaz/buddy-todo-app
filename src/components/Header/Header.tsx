import { Link } from 'react-router-dom';
import {
  Header,
  TitleRow,
  HeaderTitle,
  LogoutButtonWrapper,
  SearchFieldWrapper,
} from './elements';
import SelectButton from '@/components/Buttons/SelectButton';
import LogoutButton from '@/components/Buttons/LogoutButton';
import SearchField from '@/components/SearchField/SearchField';

export interface HeaderProps {
  searchKeyword?: string;
  setSearchKeyword?: (newValue: string) => void;
  handleSelectButton: () => void;
  handleLogout: () => void;
}

const HeaderComponent = ({
  searchKeyword,
  setSearchKeyword,
  handleSelectButton,
  handleLogout,
}: HeaderProps) => {
  return (
    <Header>
      <TitleRow>
        <HeaderTitle>ToDoish</HeaderTitle>
        <LogoutButtonWrapper>
          <LogoutButton onClick={handleLogout} />
        </LogoutButtonWrapper>
      </TitleRow>
      <SearchFieldWrapper>
        <SearchField
          value={searchKeyword || ''}
          onChange={(newValue) => setSearchKeyword(newValue)}
        />
        <Link to="/select-todo">
          <SelectButton onClick={handleSelectButton} />
        </Link>
      </SearchFieldWrapper>
    </Header>
  );
};

export default HeaderComponent;
