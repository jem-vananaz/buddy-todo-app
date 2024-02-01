import styled from 'styled-components';
import logoutIcon from '../../assets/logout-icon.svg';

const LogoutButtonWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const LogoutIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

interface LogoutButtonProps {
  onClick: () => void;
}

const LogoutButton = ({ ...props }: LogoutButtonProps) => {
  return <LogoutButtonWrapper {...props}>
    <LogoutIcon src={logoutIcon} alt="Logout" />
  </LogoutButtonWrapper>;
};

export default LogoutButton;
