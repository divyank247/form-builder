import React,{useState} from 'react'
import Sidebar from './Sidebar'
import SectionModal from './SectionModal'

const FormBuilder = ({form}) => {
    const [sectionModalOpen, setSectionModalOpen] = useState(false);
    const [editingSection,setEditingSection] = useState(false)

    const handleSaveSection = () => {

    }
  return (
    <div>
        <Sidebar form={form}
        onAddSection={() => setSectionModalOpen(true)}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        FormBuilder
      </div>

      <SectionModal
        isOpen={sectionModalOpen}
        onClose={() => {
          setSectionModalOpen(false);
          setEditingSection(false);
        }}
        onSave={handleSaveSection}
        section={editingSection}
      />
    </div>
  )
}

export default FormBuilder