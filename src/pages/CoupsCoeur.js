import React, { useEffect, useState } from 'react';
import NavCompo from '../composants/NavCompo';
import CardMovies from '../composants/CardMovies';

const CoupsCoeur = () => {
    const [fetchLocalStor, setfetchLocalStor] = useState([]);
    useEffect(() => {
        const arrayStor = localStorage.getItem("cardArray");
        setfetchLocalStor(arrayStor);
    },[])
    return (
        <>
            <header>
                <NavCompo/>
            </header>
            <section className="gridMovies">
                {
                    fetchLocalStor && fetchLocalStor
                        .map((film, index) => (
                            <CardMovies key={index} movie={film}/>
                        ))
                }
            </section>

        </>
    );
};

export default CoupsCoeur;