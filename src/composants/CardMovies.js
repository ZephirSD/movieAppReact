import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardMovies = ({ movie, setcardState }) => {
    const [genresState, setgenresState] = useState([]);
    const fetchGenres = () => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=7e84c45fe73529dd9f3040600fd5802a&language=fr-FR`)
            .then(response => setgenresState(response.data.genres));
    }

    function stringDateFR(dateValue) {
        let stringDate;
        let date = new Date(dateValue);
        stringDate = date.toLocaleDateString("fr-FR");
        return stringDate;
    }
    useEffect(fetchGenres, []);
    return (
        <>
            <div className="card" style={{position: "relative"}}>
                <FontAwesomeIcon icon={faHeart} style={{position: "absolute", top: "15px", right: "15px", fontSize: "20px", cursor: "pointer"}} onClick={(e) => setcardState(movie)} />
                <div className="titre_card">{ movie.title }</div>
                <div className="date_movies" style={{marginBottom: "5px"}}>
                    <span>Date:</span>
                    <span style={{ marginLeft: "5px" }}>
                        { stringDateFR(movie.release_date) }
                    </span>
                </div>
                <div className="origin_repas" style={{marginBottom: "5px"}}>
                    <span>Genres:</span>
                    <span style={{ marginLeft: "5px" }}>
                        {
                            movie.genre_ids.map((genre) => (
                                genresState.map((stGenre) => (
                                    genre === stGenre.id ? stGenre.name : <></>
                                ))
                            ))
                        }
                    </span>
                </div>
                <div className="origin_repas" style={{ marginBottom: "5px" }}>
                    <span>Note:</span>
                    <span style={{marginLeft: "5px"}}>{ `${Number(movie.vote_average).toPrecision(3).toString()}/10` }</span>
                </div>
                <div className="img_movies">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="img_movie" />
                </div>
                <div className="desc_movies">
                    { movie.overview }
                </div>
            </div>  
        </>
    );
};

export default CardMovies;