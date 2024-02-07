import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #6fcf97;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 800px;
`;

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <NotificationContainer>{message}</NotificationContainer>;
};

export default Notification;
