import { StoryObj, Meta } from '@storybook/react';
import DeleteConfirmDialog, {
  DeleteConfirmDialogProps,
} from './DeleteConfirmDialog';

const meta: Meta<DeleteConfirmDialogProps> = {
  title: 'Components/Dialogs',
  component: DeleteConfirmDialog,
  argTypes: {
    onCancel: { action: 'cancelled' },
    onConfirm: { action: 'confirmed' },
  },
};

export default meta;

type StoryType = StoryObj<DeleteConfirmDialogProps>;

export const Delete: StoryType = {
  args: {},
};
