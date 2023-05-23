import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  isOpen,
  onClose,
  children,
  overlayClassName,
  modalClassName,
  closeOnEsc,
  closeOnOverlayClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleOverlayClick = (event) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (event) => {
    if (closeOnEsc && event.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const overlayClasses = isModalOpen
    ? `fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${overlayClassName}`
    : 'hidden';

  const modalClasses = isModalOpen
    ? `bg-white w-64  rounded shadow ${modalClassName}`
    : 'hidden';

  useEffect(() => {
    if (isModalOpen && closeOnEsc) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeOnEsc]);

  return (
    <div
      className={overlayClasses}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal={isModalOpen}
    >
      <div className={`relative ${modalClasses}`}>
        {children}
        <button
          className="absolute top-0 right-0 p-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 8.586L3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293a1 1 0 1 0 1.414-1.414L11.414 10l6.293-6.293a1 1 0 0 0-1.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  overlayClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  closeOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  overlayClassName: '',
  modalClassName: '',
  closeOnEsc: true,
  closeOnOverlayClick: true,
};

export default Modal;
