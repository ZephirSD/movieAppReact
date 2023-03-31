import React from 'react';
import  './style/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import CoupsCoeur from './pages/CoupsCoeur';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/coup-coeur' element={<CoupsCoeur/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App