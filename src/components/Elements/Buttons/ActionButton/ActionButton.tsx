import styled from 'styled-components';

export const StyledActionButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 115px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: normal;
  text-align: left;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

export interface ActionButtonProps {
  label?: string;
  onClick: () => void;
}

const ActionButton = ({ label, onClick }: ActionButtonProps) => {
  return <StyledActionButton onClick={onClick}>{label}</StyledActionButton>;
};

export default ActionButton;
