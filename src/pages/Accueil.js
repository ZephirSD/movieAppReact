import React, { useState } from 'react';
import CardMovies from '../composants/CardMovies';
import NavCompo from '../composants/NavCompo';
// import NavBar from '../composants/NavBar';

const Accueil = ({ setcardState, filmList }) => {
    const [searchValue, setSearchValue] = useState("");
    const [valueInput, setValueInput] = useState("");
    const [, setsortFilmList] = useState([]);
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
                            <CardMovies key={index} movie={film} setcardState={setcardState}/>
                        ))
                }
            </section>
        </>
    );
};

export default Accueil;