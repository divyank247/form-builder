import React from 'react'
import FormInformation from './FormInformation'
import SectionList from './SectionsList'
import QuestionTypesMenu from './QuestionTypesMenu'

const Sidebar = ({form,onAddSection}) => {
  return (
    <div className='sidebar'>
        <div className="sidebar-menu">
            <FormInformation/>
            <SectionList form={form}
            onAddSection={onAddSection}/>
            <QuestionTypesMenu/>
        </div>
    </div>
  )
}

export default Sidebar