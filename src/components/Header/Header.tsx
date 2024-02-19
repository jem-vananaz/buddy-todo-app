import {
  Header,
  TitleRow,
  HeaderTitle,
  LogoutButtonWrapper,
  SearchFieldWrapper,
} from './elements';
import SelectButton from '@/components/Elements/Buttons/SelectButton/SelectButton';
import LogoutButton from '@/components/Elements/Buttons/LogoutButton/LogoutButton';
import SearchField from '@/components/Elements/SearchField/SearchField';

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
          value={searchKeyword}
          onChange={(newValue) => setSearchKeyword?.(newValue)}
        />
        <SelectButton onClick={handleSelectButton} />
      </SearchFieldWrapper>
    </Header>
  );
};

export default HeaderComponent;
