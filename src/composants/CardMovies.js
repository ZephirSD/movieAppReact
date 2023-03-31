import React, {  } from 'react';

const CardMovies = ({ movie }) => {
    // const [dateMovie, setdateMovie] = useState();
    // const dateFonction = () => {
    //     let date = new Date(movie);
    //     setdateMovie(date.toLocaleDateString("fr-FR"));
    // }
    // useEffect(dateFonction);
    return (
        <>
           <div className="card">
                <div className="titre_card">{ movie.title }</div>
                <div className="date_movies" style={{marginBottom: "5px"}}>
                    <span>Date:</span>
                    <span style={{ marginLeft: "5px" }}>
                        {  }
                    </span>
                </div>
                <div className="origin_repas" style={{marginBottom: "5px"}}>
                    <span>Nombre de votes:</span>
                    <span style={{marginLeft: "5px"}}>{ movie.vote_count }</span>
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