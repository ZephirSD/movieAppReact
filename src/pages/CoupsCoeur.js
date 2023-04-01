import React from 'react';
import CardMovies from '../composants/CardMovies';
import NavCompo from '../composants/NavCompo';

const CoupsCoeur = ( { arrayStor }) => {
    let boolLike = true;
    return (
        <>
            <header>
                <NavCompo/>
            </header>
            <section className="gridMovies">
                {
                    arrayStor.length === 1 ?
                    (
                        arrayStor
                        .map((film, index) => (
                            <CardMovies movie={film} key={index} boolLike={boolLike}/>
                        ))
                    ) : 
                    arrayStor.length > 1 ? 
                    (
                        arrayStor
                        .map((film) => (
                            film.map((fm, index) => (
                                <CardMovies movie={fm} key={index} boolLike={boolLike}/>
                            ))
                        ))
                    ) : (<></>)

                }
            </section>
        </>
    );
};

export default CoupsCoeur;