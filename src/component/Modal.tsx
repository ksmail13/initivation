import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = { onClose: React.MouseEventHandler<HTMLElement> }

const Modal = ({ children, onClose }: PropsWithChildren<ModalProps>) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white rounded-xl w-8 h-8 flex items-center justify-center hover:bg-red-600"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
