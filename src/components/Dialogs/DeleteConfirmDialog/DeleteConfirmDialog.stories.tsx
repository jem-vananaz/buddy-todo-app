import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DeleteConfirmDialog, {
  DeleteConfirmDialogProps,
} from './DeleteConfirmDialog';

const meta: Meta<DeleteConfirmDialogProps> = {
  title: 'Components/DeleteConfirmDialog',
  component: DeleteConfirmDialog,
  argTypes: {
    onCancel: { action: 'cancelled' },
    onConfirm: { action: 'confirmed' },
  },
};

export default meta;

type TemplateArgs = Omit<DeleteConfirmDialogProps, 'onCancel' | 'onConfirm'>;

const Template: StoryObj<TemplateArgs> = () => {
  const handleCancel = () => {
    action('cancelled')();
  };

  const handleConfirm = () => {
    action('confirmed')();
  };

  return (
    <DeleteConfirmDialog onCancel={handleCancel} onConfirm={handleConfirm} />
  );
};

export const Default: StoryObj<TemplateArgs> = Template;
Default.args = {};
