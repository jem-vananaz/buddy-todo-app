import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

const NotificationContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #6fcf97;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  animation: ${({ isVisible }) => (isVisible ? slideUp : slideDown)} 0.3s
    forwards;
`;

interface NotificationProps {
  message: string;
  visible?: boolean;
  duration?: number;
}

const Notification = ({
  message,
  visible = true,
  duration = 3000,
}: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (visible) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, duration);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [visible, duration]);

  return (
    <NotificationContainer isVisible={isVisible}>
      {message}
    </NotificationContainer>
  );
};

export default Notification;
