import React from 'react';
import './modal.css'; 

// pop-up 


function Modal({ isOpen, onClose, animal }) {

  // Render nothing if modal is not open
  if (!isOpen) {
    return null;
  }

  return (

    // Modal(pop-up) overlay, clicking closes the modal
    <div className="modal-overlay" onClick={onClose}>

      {/* Modal content, clicking inside the content does not close the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <img src={animal.image} alt={animal.name} className="modal-image" />
        <h2>{animal.name}</h2>
        <p><strong>Origin:</strong> {animal.origin}</p>
        <p><strong>Description:</strong> {animal.description}</p>
      </div>
      
    </div>
  );
}
        

export default Modal;
