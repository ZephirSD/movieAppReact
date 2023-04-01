import React, { useEffect, useState } from 'react';
import  './style/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import CoupsCoeur from './pages/CoupsCoeur';
import axios from 'axios';
import CoupCoeurVide from './pages/CoupCoeurVide';

function App() {
  let arrayStor = [];
  const [filmList, setfilmList] = useState([]);
  const [cardState, setcardState] = useState([]);
  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7e84c45fe73529dd9f3040600fd5802a&query=code&language=fr-FR`)
        .then(response => setfilmList(response.data.results));
  }
  useEffect(() => {
    async function setCardArray() {
      await localStorage.setItem("cardArray", JSON.stringify(cardState));
    }
    setCardArray();
  });
  useEffect(() => {
    async function getCardArray() {
      let valueStor = await JSON.parse(localStorage.getItem('cardArray'));
      arrayStor.push(valueStor);
    }
    getCardArray();
  });
  useEffect(fetchMovies, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil setcardState={setcardState} filmList={filmList} arrayStor={arrayStor}/>} />
          <Route path='/coup-coeur' element={(cardState.length === 0) ? <CoupCoeurVide/> : <CoupsCoeur arrayStor={arrayStor}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App