import React from 'react'

const SectionsList = ({
    form,
    onAddSection,
}) => {
    const section = form.sections;
  return (
    <div className="menu-section">
        <div className="section-title-row">
            <span className="section-title">Form Sections</span>
            <button className="add-section-btn" onClick={onAddSection}>+</button>
        </div>

        {section.length > 0 ? (
            <div className="sections-list"></div>
        ): (
            <div className="no-sections">
                <span className="no-section-text">No sections yet</span>
            </div>
        )}
    </div>
  )
}

export default SectionsList