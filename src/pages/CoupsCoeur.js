import React from 'react';
import CardMovies from '../composants/CardMovies';
import NavCompo from '../composants/NavCompo';

const CoupsCoeur = ({ filmList }) => {
    //const [fetchLocalStor, setfetchLocalStor] = useState([]);
    let arrayStor = [];
    let valueStor = JSON.parse(localStorage.getItem('cardArray'));
    arrayStor.push(valueStor);
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
                            <CardMovies movie={film} key={index}/>
                        ))
                    ) : 
                    arrayStor.length > 1 ? 
                    (
                        arrayStor
                        .map((film) => (
                            film.map((fm, index) => (
                                <CardMovies movie={fm} key={index}/>
                            ))
                        ))
                    ) : (<></>)

                }
            </section>
        </>
    );
};

export default CoupsCoeur;