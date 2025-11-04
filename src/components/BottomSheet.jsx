import * as Dialog from '@radix-ui/react-dialog';
import './BottomSheet.css';

export function BottomSheet({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bottom-sheet-overlay" />
        <Dialog.Content className="bottom-sheet-content">
          <div className="bottom-sheet-handle">
            <div className="bottom-sheet-handle-bar" />
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
