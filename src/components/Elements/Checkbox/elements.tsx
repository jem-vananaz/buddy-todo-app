import styled from 'styled-components';

export const StyledCheckboxContainer = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
  }
`;

export const StyledCheckmark = styled.span<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: ${(props) => (props.checked ? '#6FCF97' : '#fff')};
  border: 1px solid ${(props) => (props.checked ? '#6FCF97' : '#828282')};
  border-radius: 50%;

  ::after {
    content: ${(props) =>
      props.checked ? "'\u2713'" : "''"}; /* Checkmark Unicode */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 14px;
    opacity: ${(props) =>
      props.checked ? '1' : '0'}; /* Show/hide the checkmark */
  }
`;
