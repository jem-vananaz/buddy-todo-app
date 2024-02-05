import styled from 'styled-components';

export const StyledActionButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: normal;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

export interface ActionButtonProps {
  label?: string;
  onClick: () => void;
}

  
const ActionButton = ({ label, onClick } : ActionButtonProps) => {
  return (
    <StyledActionButton onClick={onClick}>
      {label}
    </StyledActionButton>
  );
};

export default ActionButton;
