import { 
    Header, 
    TitleRow, 
    HeaderTitle, 
    SearchFieldWrapper 
} from './elements';
import Button from '@/components/Buttons/Button';
import LogoutButton from '@/components/Buttons/LogoutButton';
import SearchField from '@/components/SearchField/SearchField';

interface HeaderProps {
  searchKeyword: string;
  setSearchKeyword: (newValue: string) => void;
  handleSelectButton: () => void;
  handleLogout: () => void;
}

const HeaderComponent = ({ searchKeyword, setSearchKeyword, handleSelectButton, handleLogout } : HeaderProps) => {
  return (
    <Header>
      <TitleRow>
        <HeaderTitle>ToDoish</HeaderTitle>
        <LogoutButton onClick={handleLogout} />
      </TitleRow>
      <SearchFieldWrapper>
        <SearchField
          value={searchKeyword}
          onChange={(newValue) => setSearchKeyword(newValue)}
        />
        <Button label={'Select'} onClick={handleSelectButton}/>
      </SearchFieldWrapper>
    </Header>
  );
};

export default HeaderComponent;
