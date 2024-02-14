import React, { useEffect } from 'react';
import {
  TodoItemContainer,
  TodoText,
  KebabIconContainer,
  KebabIcon,
  ActionButtons,
} from './elements';
import kebabIcon from '@/assets/kebab-icon.svg';
import ActionButton from '@/components/Buttons/ActionButton';

interface TodoItemProps {
  id: string;
  text: string;
  isSelectedForDeletion?: boolean;
  visibleActionButtonsId: string | undefined;
  onClick: () => void;
  handleKebabIconClick: (id: string) => void;
  handleUpdateTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

const TodoItem = ({
  id,
  text,
  isSelectedForDeletion = false,
  visibleActionButtonsId,
  onClick,
  handleKebabIconClick,
  handleUpdateTodo,
  handleDeleteTodo,
}: TodoItemProps) => {
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
      className={visibleActionButtonsId === id ? 'action-buttons-visible' : ''}>
      <TodoText isSelectedForDeletion={isSelectedForDeletion}>{text}</TodoText>
      <KebabIconContainer>
        <KebabIcon
          src={kebabIcon}
          alt="Kebab Icon"
          className={
            isSelectedForDeletion || visibleActionButtonsId === id ? 'blue' : ''
          }
          isVisible={!isSelectedForDeletion && visibleActionButtonsId === id}
          onClick={handleClick}
        />
        <ActionButtons isVisible={visibleActionButtonsId === id}>
          <ActionButton label={'Update'} onClick={() => handleUpdateTodo(id)} />
          <ActionButton label={'Delete'} onClick={() => handleDeleteTodo(id)} />
        </ActionButtons>
      </KebabIconContainer>
    </TodoItemContainer>
  );
};

export default TodoItem;
