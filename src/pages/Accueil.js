import React, { useState } from 'react';
import CardMovies from '../composants/CardMovies';
import NavCompo from '../composants/NavCompo';

const Accueil = ({ setcardState, filmList, cards, setSearchFilm, searchFilm }) => {
    const [valueInput, setValueInput] = useState("");
    const [, setsortFilmList] = useState([]);
    const [toggleBool, settoggleBool] = useState(true);
    const [textBouton, settextBouton] = useState("Top");
    function toggleTopFlop() {
        settoggleBool(toggleBool => !toggleBool)
        if (toggleBool) {
            setsortFilmList(filmList.sort((first, second) => second.vote_average - first.vote_average));
            settextBouton("Flop");
        }
        else {
            setsortFilmList(filmList.sort((first, second) => first.vote_average - second.vote_average));
            settextBouton("Top");
        }
    }
    return (
        <>
            <header style={{ position: "relative" }}>
                <NavCompo/>
                <div className="searchCase">
                    <input type="text" placeholder='Chercher le film' value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                    <button className="btnSearch" onClick={(e) => setSearchFilm(valueInput) }>Rechercher</button>
                </div>
                <div className="caseTopFlop" style={{ position: "absolute" }}>
                    <button className="btnTopFlop" onClick={toggleTopFlop}>{textBouton}</button>
                </div>
            </header>
            <section className="gridMovies">
                {
                    filmList && filmList
                        .filter((search) => search.title.toLowerCase().includes(searchFilm.toLowerCase()))
                        .map((film, index) => (
                            <CardMovies key={index} movie={film} setcardState={setcardState} cards={cards}/>
                    ))
                }
            </section>
        </>
    );
};

export default Accueil;