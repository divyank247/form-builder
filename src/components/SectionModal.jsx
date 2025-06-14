import React, { useState,useEffect } from 'react'

const SectionModal = ({isOpen,onClose,onSave,section = null}) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    useEffect(() => {
        if(isOpen) {
            if(section) {
                setTitle(section.title);
                setDescription(section.description)
            } else {
                setTitle('');
                setDescription('');
            }
        }
    },[isOpen,section]);

    if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            {section ? 'Edit Section' : 'Add New Section'}
          </h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Section Title *</label>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter section title..."
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="form-label">Section Description</label>
            <textarea
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description for this section..."
              rows={4}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary">
            {section ? 'Update Section' : 'Add Section'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SectionModal