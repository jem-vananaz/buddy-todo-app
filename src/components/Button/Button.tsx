import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    width: 56px;
    height: 32px;
    background-color: rgba(47, 128, 237, 0.3); /* Faded background appearance */
    color: #2F80ED;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 16.41px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;
`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

const Button: React.FC<ButtonProps> = ({ label = 'Select', ...props }) => {
    return <ButtonWrapper {...props}>{label}</ButtonWrapper>;
};
  
export default Button;
