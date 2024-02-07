import styled from 'styled-components';
import logoutIcon from '../../assets/logout-icon.svg';

const LogoutButtonWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const LogoutIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export interface LogoutButtonProps {
  onClick: () => void;
}

const LogoutButton = ({ onClick, ...props }: LogoutButtonProps) => {
  return (
    <LogoutButtonWrapper onClick={onClick} {...props}>
      <LogoutIcon src={logoutIcon} alt="Logout" />
    </LogoutButtonWrapper>
  );
};

export default LogoutButton;
