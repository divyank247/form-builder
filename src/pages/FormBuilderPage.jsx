import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import FormBuilder from '../components/FormBuilder';
import FormPreview from '../components/FormPreview';
import BranchingLogicPanel from '../components/BranchingLogicPanel';
import '../style/FormBuilder.css'

const FormBuilderPage = () => {
    const [currentView,setCurrentView] = useState('builder')
    const [form,setForm] = useState({
        id: 'form-demo',
        title: 'New Assessment Form',
        description: 'Enter Form description here...',
        questions: [],
        sections: [],
        createdAt: new Date().toISOString()
    });

    const renderCurrentView = () => {
        switch(currentView) {
            case 'builder':
                return <FormBuilder/>

            case 'branching':
                return <BranchingLogicPanel/>
            
            case 'preview':
                return <FormPreview/>
        }
    }

  return (
    <div>
        <Navbar currentView={currentView}
        onViewChange={setCurrentView}
        form={form}/>

        <div>
            {renderCurrentView()}
        </div>
    </div>

    
  )
}

export default FormBuilderPage