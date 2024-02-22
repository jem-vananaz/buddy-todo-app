import { StyledCheckboxContainer, StyledCheckmark } from './elements';
import checkIcon from '@/assets/check-icon.svg';

export interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ id, checked, onChange, onClick }: CheckboxProps) => {
  return (
    <StyledCheckboxContainer>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <StyledCheckmark checked={checked} onClick={onClick}>
        {checked && <img src={checkIcon} alt="Check Icon" />}{' '}
      </StyledCheckmark>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
