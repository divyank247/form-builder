import React from 'react'

const Navbar = ({currentView,onViewChange, form}) => {
  return (
    <div className='form-builder-nav'>
        <div className='nav-tabs'>
            <button className={`nav-btn ${currentView === 'builder' ? 'active' : ''}`}
            onClick={() => onViewChange('builder')}>
                Form Builder
            </button>

            <button className={`nav-btn ${currentView === 'preview' ? 'active' : ''}`}
            onClick={() => onViewChange('preview')}>
                Live Preview
            </button>

            <button className={`nav-btn ${currentView === 'branching' ? 'active' : ''}`}
            onClick={() => onViewChange('branching')}>
                Branching Logic
            </button>
        </div>

        <div className="navbar-status">
        <span className="status-item">
          <strong>{form.title}</strong>
        </span>
        <span className="status-divider">|</span>
        <span className="status-item">
          Questions: {form.questions?.length || 0}
        </span>
        <span className="status-divider">|</span>
        {form.sections && form.sections.length > 0 && (
          <>
            <span className="status-divider">|</span>
            <span className="status-item">
              Sections: {form.sections.length}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar