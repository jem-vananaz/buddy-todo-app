import styled from 'styled-components';

export const StyledAddButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background-color: #2f80ed;
  color: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
`;

export interface AddButtonProps {
  onClick: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return <StyledAddButton onClick={onClick}>+</StyledAddButton>;
};

export default AddButton;
