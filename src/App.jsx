import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormBuilderPage from './pages/FormBuilderPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormBuilderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
