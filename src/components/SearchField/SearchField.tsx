import styled from 'styled-components';
import searchIcon from '../../assets/search-icon.svg';

const SearchFieldWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 224px;
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
  pointer-events: none; /* Ensure the icon does not interfere with input events */
`;

const CustomMagnifyingGlassSVG = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchField = ({ value, onChange }: SearchFieldProps) => {
  return (
    <SearchFieldWrapper>
      <MagnifyingGlassIcon>
        <CustomMagnifyingGlassSVG
          src={searchIcon}
          alt="Search Icon"
        />
      </MagnifyingGlassIcon>
      <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </SearchFieldWrapper>
  );
};

export default SearchField;
