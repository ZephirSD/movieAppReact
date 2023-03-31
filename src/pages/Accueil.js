import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CardMovies from '../composants/CardMovies';
import axios from 'axios';

const Accueil = () => {
    const [filmList, setfilmList] = useState([]);
    const fetchMovies = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7e84c45fe73529dd9f3040600fd5802a&query=code&language=fr-FR`)
            .then(response => setfilmList(response.data.results));
    }
    useEffect(fetchMovies, []);
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Accueil</NavLink></li>
                        <li><NavLink to={"coup-coeur"}>Coups de Coeur</NavLink></li>
                    </ul>
                </nav>
                <div className="searchCase">
                    <input type="text" placeholder='Chercher le film' />
                    <button className="btnSearch">Rechercher</button>
                </div>
            </header>
            <section className="gridMovies">
                {
                    filmList.map((film, index) => (
                        <CardMovies key={index} movie={film}/>
                    ))
                }
            </section>
        </>
    );
};

export default Accueil;