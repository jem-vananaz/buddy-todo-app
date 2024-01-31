import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/search-icon.svg';

const SearchFieldWrapper = styled.div`
  position: absolute;
  width: 224px;
  height: 32px;
  top: 129px;
  left: 16px;
  border: 1px solid #828282;
  border-radius: 4px;
  overflow: hidden; /* Ensure the border is not affected by the gradient background */
  transition: background 0.3s; /* Add a smooth transition effect for the background change */

  &:hover {
    background: linear-gradient(0deg, #3f51b5, #3f51b5), linear-gradient(0deg, #FFFFFF, #FFFFFF);
    border-color: #3f51b5;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 32px; /* Space for the magnifying glass icon */
  border: none; /* Remove border here, as it's applied to the wrapper */
  border-radius: 4px;
  font-size: 14px;
  outline: none; /* Remove default focus outline */
`;

const MagnifyingGlassIcon = styled.span`
  position: absolute;
  top: 60%;
  left: 8px;
  transform: translateY(-50%);
  color: #828282;
`;

const CustomMagnifyingGlassSVG = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px; /* Adjust spacing between icon and input */
`;

const SearchField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <SearchFieldWrapper>
      <MagnifyingGlassIcon>
        <CustomMagnifyingGlassSVG
          src={searchIcon}
          alt="Search Icon"
        />
      </MagnifyingGlassIcon>
      <Input type="text" {...props} />
    </SearchFieldWrapper>
  );
};

export default SearchField;
