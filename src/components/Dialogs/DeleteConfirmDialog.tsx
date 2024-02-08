import styled from 'styled-components';

interface DeleteConfirmDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eef3f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 320px;
  width: calc(100% - 40px);
  height: 111px;
  text-align: center;
`;

const DeleteText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 80px;
  height: 38px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  outline: none;
`;

const NoButton = styled(Button)`
  background-color: #fce0e0;
  color: #ed2f2f;
  margin-right: 10px;
`;

const YesButton = styled(Button)`
  background-color: #2f80ed;
  color: white;
`;

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
