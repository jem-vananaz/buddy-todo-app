import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.div`
  margin-top: 20px;
`;

export const AuthHeader = styled.div`
  background: #a6caf9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px 30px 20px;
  width: 100%;
`;

export const TodoishLogo = styled.img`
  height: 71px;
  width: auto;
`;

export const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 320px;
`;

export const AuthTitle = styled.div`
  color: #2f80ed;
  margin-top: 15px;
  font-size: 26px;
  font-weight: bold;
`;

export const AuthTagline = styled.div`
  color: #5c78a0;
  margin-top: 7px;
  font-size: 14px;
`;

export const AuthFormContainer = styled.form`
  flex-direction: column;
  padding: 30px 40px 10px 40px;
`;

export const FormButton = styled.button`
  margin-top: 15px;
  background-color: #2f80ed;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  width: calc(100% - -40px);

  &:hover {
    background-color: #0b0c0d;
  }
  &:disabled {
    background-color: #9abff1;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #ed2f2f;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 15px;
`;

export const GeneralErrorMessage = styled.div`
  color: #ed2f2f;
  font-size: 12px;
  margin-top: 15px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #403e3e;
`;

export const StyledLink = styled(Link)`
  color: #2f80ed;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
