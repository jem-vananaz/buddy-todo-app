import {
  DialogContainer,
  DeleteText,
  ButtonContainer,
  NoButton,
  YesButton,
} from './elements';

export interface DeleteConfirmDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmDialog = ({
  onCancel,
  onConfirm,
}: DeleteConfirmDialogProps) => {
  return (
    <DialogContainer>
      <DeleteText>Delete to do?</DeleteText>
      <ButtonContainer>
        <NoButton onClick={onCancel}>No</NoButton>
        <YesButton onClick={onConfirm}>Yes</YesButton>
      </ButtonContainer>
    </DialogContainer>
  );
};

export default DeleteConfirmDialog;
