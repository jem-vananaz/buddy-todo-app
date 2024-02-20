import { DialogContainer, DialogOption } from './elements';
export interface TodoOptionsDialogProps {
  onSelectAll: () => void;
  onCompleteSelected: () => void;
  onDeleteSelected: () => void;
}

const TodoOptionsDialog = ({
  onSelectAll,
  onCompleteSelected,
  onDeleteSelected,
}: TodoOptionsDialogProps) => {
  return (
    <DialogContainer>
      <DialogOption onClick={onSelectAll}>Select All</DialogOption>
      <DialogOption onClick={onCompleteSelected}>
        Complete Selected
      </DialogOption>
      <DialogOption onClick={onDeleteSelected} isDelete>
        Delete Selected
      </DialogOption>
    </DialogContainer>
  );
};

export default TodoOptionsDialog;
