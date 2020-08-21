import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center text-primary">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" >Presentación</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sobre mi</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Estudios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Proyectos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;