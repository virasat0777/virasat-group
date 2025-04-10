import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const handleOverlayClick = (e) => {
    // Only close if the clicked area is the overlay itself
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };
  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      tabIndex="-1"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-y-auto overflow-x-hidden rounded-md"
    >
      <div className="relative w-full max-w-2xl max-h-full px-4">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Header */}

          {/* Body */}
          <div className="p-6 space-y-6">{children}</div>

          {/* Footer (optional) */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={onClose}
              type="button"
              className="text-white bg-[#C29B5C] hover:bg-black font-medium text-sm px-5 py-2.5 text-center rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
