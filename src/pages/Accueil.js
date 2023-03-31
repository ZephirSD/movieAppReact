import React, { useEffect, useState } from 'react';
import CardMovies from '../composants/CardMovies';
import axios from 'axios';
import NavCompo from '../composants/NavCompo';
// import NavBar from '../composants/NavBar';

const Accueil = () => {
    const [filmList, setfilmList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [valueInput, setValueInput] = useState("");
    const [, setsortFilmList] = useState([]);
    const fetchMovies = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7e84c45fe73529dd9f3040600fd5802a&query=code&language=fr-FR`)
            .then(response => setfilmList(response.data.results));
    }
    useEffect(fetchMovies, []);
    return (
        <>
            <header style={{ position: "relative" }}>
                <NavCompo/>
                <div className="searchCase">
                    <input type="text" placeholder='Chercher le film' value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                    <button className="btnSearch" onClick={(e) => setSearchValue(valueInput) }>Rechercher</button>
                </div>
                <div className="caseTopFlop" style={{ position: "absolute" }}>
                    <button className="btnTopFlop" onClick={(e) => setsortFilmList(filmList.sort((first, second) => second.vote_average - first.vote_average))}>Top</button>
                </div>
            </header>
            <section className="gridMovies">
                {
                    filmList && filmList
                        .filter((search) => search.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((film, index) => (
                            <CardMovies key={index} movie={film}/>
                        ))
                }
            </section>
        </>
    );
};

export default Accueil;