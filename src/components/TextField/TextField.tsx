import styled from 'styled-components';

const TextFieldWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 224px;
  height: 32px;
  padding-left: 32px;
  border: 1px solid #828282;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  color: #828282;
  pointer-events: none; /* Ensure the icon does not interfere with input events */
`;

export interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextField = ({
  value,
  onChange,
  placeholder = 'Enter text here',
}: TextFieldProps) => {
  return (
    <TextFieldWrapper>
      <IconWrapper>
        {/* You can put any icon or component here */}
        <span>Icon</span>
      </IconWrapper>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </TextFieldWrapper>
  );
};

export default TextField;
