import styled from 'styled-components';

const SelectButtonWrapper = styled.button`
  height: 38px;
  background-color: rgba(47, 128, 237, 0.3); /* Faded background appearance */
  color: #2f80ed;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 16.41px;
  letter-spacing: 0em;
  text-align: center;
  padding: 10px;
  cursor: pointer;
`;

export interface SelectButtonProps {
  onClick: () => void;
}

const SelectButton = ({ onClick }: SelectButtonProps) => {
  return <SelectButtonWrapper onClick={onClick}>Select</SelectButtonWrapper>;
};

export default SelectButton;
