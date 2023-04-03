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
            {
                arrayStor && arrayStor.length > 0 ?
                <section className="gridMovies">
                    {
                        arrayStor
                        .map((film, index) => (
                            <CardMovies movie={film} key={index} boolLike={boolLike} cards={arrayStor}/>
                        ))
                    }
                </section>
                : 
                <section className="flexMovies">
                    <h3 className="textGridMovies">Vous n'avez aucun film dans les coups de coeurs</h3>
                </section>
            }
        </>
    );
};

export default CoupsCoeur;