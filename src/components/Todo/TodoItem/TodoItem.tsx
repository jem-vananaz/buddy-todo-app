import {
  TodoItemContainer,
  TodoText,
  KebabIconContainer,
  KebabIcon,
  ActionButtons,
} from './elements';
import kebabIcon from '@/assets/kebab-icon.svg';
import ActionButton from '@/components/Buttons/ActionButton';

export interface TodoItemProps {
  id: number;
  text: string;
  isSelectedForDeletion?: boolean;
  visibleActionButtonsId: number | undefined;
  onClick: () => void;
  handleKebabIconClick: (id: number) => void;
  handleUpdateTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
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
