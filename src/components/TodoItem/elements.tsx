import styled from 'styled-components';
import kebabIconBlue from '@/assets/kebab-icon-blue.svg';

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 8px;
  cursor: pointer;

  &:not(.action-buttons-visible):hover {
    background-color: #f0f0f0;
  }
`;

export const TodoText = styled.div`
  flex-grow: 1;
  font-size: 14px;
`;

export const KebabIconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const KebabIcon = styled.img<{ isVisible: boolean }>`
  cursor: pointer;
  transition: filter 0.3s;
  filter: brightness(${(props) => (props.isVisible ? 1.5 : 1)});

  ${KebabIconContainer}:hover &,
  ${KebabIconContainer}:focus &,
  &.blue {
    filter: brightness(1.5);
    content: url(${kebabIconBlue});
  }
`;

export const ActionButtons = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(1px, -20%);
  flex-direction: column;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  align-items: flex-start;
  width: 115px;
  height: 75px;
  margin-right: 7px;
`;
