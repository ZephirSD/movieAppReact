import React from 'react';
import  './style/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App