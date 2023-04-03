import React, { useEffect, useState } from 'react';
import  './style/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import CoupsCoeur from './pages/CoupsCoeur';
import axios from 'axios';

function App() {
  let cards = JSON.parse(localStorage.getItem('cardArray') || '[]');
  const [filmList, setfilmList] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");
  const [cardState, setcardState] = useState("");
  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7e84c45fe73529dd9f3040600fd5802a&query=${searchFilm}&language=fr-FR`)
        .then(response => setfilmList(response.data.results));
  }
  useEffect(() => {
    async function setCardArray() {
      if(cardState && JSON.stringify(cardState).length > 2){
        cards.push(cardState);
        await localStorage.setItem("cardArray", JSON.stringify(cards));
      }
    }
    setCardArray();
  });
  useEffect(fetchMovies, [searchFilm]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil setcardState={setcardState} filmList={filmList} cards={cards} setSearchFilm={setSearchFilm} searchFilm={searchFilm}/>} />
          <Route path='/coup-coeur' element={<CoupsCoeur arrayStor={cards}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App