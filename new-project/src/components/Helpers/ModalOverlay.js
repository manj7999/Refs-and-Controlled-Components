import React from 'react';

const ModalOverlay = (props) => {
  return (
    <div className="modal-overlay">
      {props.children}
    </div>
  );
};

export default ModalOverlay;