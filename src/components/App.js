import React from 'react';
import '../styles/App.css';
import Curriculum from './Curriculum';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Crud from './Crud';



function App() {
  return (
    <div className="center w85">
    <div className="ph3 pv1 background-gray">
    
    <Routes>
       <Route exact path='/' element={<Curriculum/>} />
       <Route exact path='/login' element={<Login/>} />
       <Route exact path='/dashboard' element={<Crud/>} />
    
     </Routes>


    </div>
  </div>
  );
}

export default App;
