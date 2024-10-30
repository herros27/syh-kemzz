import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { projectsData } from './data/projects';
import { certificatesData } from './data/certificates';
import { skillsData } from './data/skill';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="min-h-screen bg-bg">
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/about' element={<About skills={skillsData}/>}/>
          <Route path='/project' element={<Projects projects={projectsData}/>}/>
          <Route path='/certificate' element={<Certificates certificates={certificatesData}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
        </Routes>
      </div>
    </Router>
  );
};

export default App
