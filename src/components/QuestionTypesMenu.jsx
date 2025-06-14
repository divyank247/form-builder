import React from 'react'
import { QUESTION_TYPES } from '../data/questionTypes'

const QuestionTypesMenu = () => {
    const questionTypes = QUESTION_TYPES;

  return (
    <div className="menu-section">
        <div className="section-title-row">
            <span className="section-title">
                Add Questions
            </span>
        </div>

        <div className="question-types-menu">
            {questionTypes.map(({type,label,icon}) => (
                <button
                  key={type}
                  className='question-type-item'
                >
                    <span className='question-icon'>
                        {icon}
                    </span>
                    <span className='question-label'>
                        {label}
                    </span>
                </button>
            ))}
        </div>
    </div>
  )
}

export default QuestionTypesMenu