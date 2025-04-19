import React from 'react'
import './Modal.scss'

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal