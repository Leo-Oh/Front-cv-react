import React from 'react';
import '../styles/App.css';
import Curriculum from './Curriculum';
import { Routes, Route,Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="center w85">
    <div className="ph3 pv1 background-gray">
    
    <Routes>
       <Route exact path='/' element={<Curriculum/>} />
    
     </Routes>


    </div>
  </div>
  );
}

export default App;
