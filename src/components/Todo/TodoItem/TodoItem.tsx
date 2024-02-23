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

export interface TodoItemProps {
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
  const [internalSelected, setInternalSelected] = useState(isSelected);

  useEffect(() => {
    setInternalSelected(isSelected);
  }, [isSelected]);

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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the event from propagating to parent elements
    e.stopPropagation();

    // Toggle selection state and show checkboxes
    const newSelectionState = !internalSelected;
    setInternalSelected(newSelectionState);
    if (handleSelectTodo) {
      handleSelectTodo(id, newSelectionState);
    }

    // Hide kebab icon when clicked on todo item
    handleKebabIconClick('');
  };

  const handleCheckboxChange = () => {
    const newSelectionState = !internalSelected;
    setInternalSelected(newSelectionState);
    if (handleSelectTodo) {
      handleSelectTodo(id, newSelectionState);
    }
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // Prevent the event from propagating to parent elements
    e.stopPropagation();
  };

  const handleKebabClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    handleKebabIconClick(id);
  };

  return (
    <TodoItemContainer
      key={id}
      onClick={handleClick}
      className={visibleActionButtonsId === id ? 'action-buttons-visible' : ''}
      status={status}>
      {!isSelectedForDeletion && showCheckbox && (
        <CheckboxContainer>
          <Checkbox
            id={id}
            checked={internalSelected}
            onChange={handleCheckboxChange}
            onClick={handleCheckboxClick}
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
            onClick={handleKebabClick}
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
