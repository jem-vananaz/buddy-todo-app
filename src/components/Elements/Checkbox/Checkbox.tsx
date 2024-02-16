import { StyledCheckboxContainer, StyledCheckmark } from './elements';

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <StyledCheckboxContainer>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <StyledCheckmark checked={checked} />
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
