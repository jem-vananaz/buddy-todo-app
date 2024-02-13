import React from 'react';
import styled from 'styled-components';
import clearIcon from '@/assets/clear-icon.svg';

const TextFieldWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 224px;
  height: 32px;
  padding-left: 10px;
  padding-right: 32px;
  border: 1px solid #828282;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #2f80ed;
  }
`;

const ClearIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export interface TextFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextField = ({
  placeholder = '',
  value,
  onChange,
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
      <Input
        placeholder={placeholder}
        type="text"
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
