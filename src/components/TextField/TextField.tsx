import React from 'react';
import styled from 'styled-components';
import clearIcon from '@/assets/clear-icon.svg';

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: #828282;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  padding-right: 32px;
  border: 1px solid #828282;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  position: relative;

  &:focus {
    border-color: #2f80ed;
  }
`;

const ClearIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(155%);
  cursor: pointer;
`;

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  onClear?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  onClear,
  onKeyDown,
}: TextFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <TextFieldWrapper>
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        autoFocus={true}
      />
      {value && <ClearIcon src={clearIcon} alt="Clear" onClick={handleClear} />}
    </TextFieldWrapper>
  );
};

export default TextField;
