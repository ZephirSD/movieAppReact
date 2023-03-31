import React from 'react';
import { NavLink } from 'react-router-dom';

const NavCompo = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Accueil</NavLink></li>
                    <li><NavLink to={"coup-coeur"}>Coups de Coeur</NavLink></li>
                </ul>
            </nav>
        </>
    );
};

export default NavCompo;