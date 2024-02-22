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

  img {
    display: ${(props) =>
      props.checked ? 'block' : 'none'}; // Show/hide the icon
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
