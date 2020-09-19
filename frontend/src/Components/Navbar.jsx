import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center text-primary fixed-top">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to={"/about"}>Sobre mi</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/studies"}>Estudios</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/proyects"}>Proyectos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/contact"}>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;