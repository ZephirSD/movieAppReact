import React from 'react';
import NavCompo from '../composants/NavCompo';

const CoupCoeurVide = () => {
    return (
        <>
            <header>
                <NavCompo/>
            </header>
            <section className="flexMovies">
                <h3 className="textGridMovies">Vous n'avez aucun film dans les coups de coeurs</h3>
            </section>
        </>
    );
};

export default CoupCoeurVide;