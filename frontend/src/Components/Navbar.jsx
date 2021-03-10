import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center text-primary fixed-top">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink activeClassName={"active"} className="nav-link" to={"/about"}>Sobre mi</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={"active"} className="nav-link" to={"/studies"}>Estudios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={"active"} className="nav-link" to={"/proyects"}>Proyectos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={"active"} className="nav-link" to={"/contact"}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
