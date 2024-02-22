import styled from 'styled-components';
import searchIcon from '@/assets/search-icon.svg';
import clearIcon from '@/assets/clear-icon.svg';

const SearchFieldWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  min-width: 224px;
  width: 100%;
  height: 32px;
  padding-left: 32px;
  border: 1px solid #828282;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
`;

const MagnifyingGlassIcon = styled.span`
  position: absolute;
  top: 55%;
  left: 8px;
  transform: translateY(-50%);
  color: #828282;
  pointer-events: none;
`;

const CustomMagnifyingGlassSVG = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const ClearIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export interface SearchFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const SearchField = ({ placeholder, value, onChange }: SearchFieldProps) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <SearchFieldWrapper>
      <MagnifyingGlassIcon>
        <CustomMagnifyingGlassSVG src={searchIcon} alt="Search Icon" />
      </MagnifyingGlassIcon>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && <ClearIcon src={clearIcon} alt="Clear" onClick={handleClear} />}
    </SearchFieldWrapper>
  );
};

export default SearchField;
