import styled from 'styled-components';

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eef3f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  max-width: 320px;
  width: 300px;
  height: 130px;
  text-align: left;
`;

const DialogOption = styled.div<{ isDelete?: boolean }>`
  color: ${(props) => (props.isDelete ? '#ed2f2f' : '#000')};
  font-size: 16px;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.isDelete ? '#ed2f2f' : '#000')};
    background-color: ${(props) =>
      props.isDelete ? '#FCE0E0' : 'rgba(0, 0, 0, 0.1)'};
  }
`;

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
