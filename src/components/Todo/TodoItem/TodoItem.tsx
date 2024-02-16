import React, { useEffect, useState } from 'react';
import {
  TodoItemContainer,
  CheckboxContainer,
  TodoText,
  KebabIconContainer,
  KebabIcon,
  ActionButtons,
} from './elements';
import kebabIcon from '@/assets/kebab-icon.svg';
import ActionButton from '@/components/Elements/Buttons/ActionButton/ActionButton';
import Checkbox from '@/components/Elements/Checkbox/Checkbox';

interface TodoItemProps {
  id: string;
  text: string;
  status: string;
  isSelectedForDeletion?: boolean;
  visibleActionButtonsId: string | undefined;
  onClick: () => void;
  showCheckbox?: boolean;
  isSelected?: boolean;
  handleSelectTodo?: (id: string, isSelected: boolean) => void;
  handleKebabIconClick: (id: string) => void;
  handleUpdateTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

const TodoItem = ({
  id,
  text,
  status,
  isSelectedForDeletion = false,
  visibleActionButtonsId,
  onClick,
  showCheckbox = false,
  isSelected = false,
  handleSelectTodo,
  handleKebabIconClick,
  handleUpdateTodo,
  handleDeleteTodo,
}: TodoItemProps) => {
  const [internalSelected, setInternalSelected] = useState(false);

  useEffect(() => {
    setInternalSelected(isSelected);
  }, [isSelected]);

  const handleCheckboxChange = () => {
    const newSelectionState = !internalSelected;
    setInternalSelected(newSelectionState);
    if (handleSelectTodo) {
      handleSelectTodo(id, newSelectionState);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    handleKebabIconClick(id);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedElement = e.target as Element;
      const isWithinTodoItem = clickedElement.closest('.todo-item');
      const isWithinActionButtons = clickedElement.closest('.action-buttons');

      if (
        !document.body.contains(clickedElement) ||
        isWithinTodoItem ||
        isWithinActionButtons
      ) {
        return;
      }

      handleKebabIconClick('');
    };

    if (visibleActionButtonsId === id) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [id, visibleActionButtonsId, handleKebabIconClick]);

  return (
    <TodoItemContainer
      key={id}
      onClick={onClick}
      className={visibleActionButtonsId === id ? 'action-buttons-visible' : ''}
      status={status}>
      {showCheckbox && (
        <CheckboxContainer>
          <Checkbox
            checked={internalSelected}
            onChange={handleCheckboxChange}
          />
        </CheckboxContainer>
      )}
      <TodoText isSelectedForDeletion={isSelectedForDeletion}>{text}</TodoText>
      {!showCheckbox && status !== 'completed' && (
        <KebabIconContainer>
          <KebabIcon
            src={kebabIcon}
            alt="Kebab Icon"
            className={
              isSelectedForDeletion || visibleActionButtonsId === id
                ? 'blue'
                : ''
            }
            isVisible={!isSelectedForDeletion && visibleActionButtonsId === id}
            onClick={handleClick}
          />
          <ActionButtons isVisible={visibleActionButtonsId === id}>
            <ActionButton
              label={'Update'}
              onClick={() => handleUpdateTodo(id)}
            />
            <ActionButton
              label={'Delete'}
              onClick={() => handleDeleteTodo(id)}
            />
          </ActionButtons>
        </KebabIconContainer>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
