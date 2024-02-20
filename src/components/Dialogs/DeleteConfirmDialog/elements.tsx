import styled from 'styled-components';

export const DialogContainer = styled.div`
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eef3f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 320px;
  width: 280px;
  height: 120px;
  text-align: center;
`;

export const DeleteText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 38px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  outline: none;
`;

export const NoButton = styled(Button)`
  background-color: #fce0e0;
  color: #ed2f2f;
  margin-right: 10px;
`;

export const YesButton = styled(Button)`
  background-color: #2f80ed;
  color: white;
`;
