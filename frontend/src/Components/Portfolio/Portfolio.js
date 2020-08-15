import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

function Portfolio() {
    const [projects, setProjects] = useState({});
    useEffect(() => {
        axios.get('https://manuortelliportfoliobackend.herokuapp.com/portfolio')
            .then(
                res => setProjects(res.data)
                )
    }, [setProjects])

    return (
        <>
            <div className="cardPortfolio">
            
                {projects.length > 0 && projects.map((project, index) =>
                    <div className="individual-card" key={index}>
                        <h1>{project.name}</h1>
                        <img className="img-project" alt="imagen-proyecto" src={project.image}></img>
                        <p>{project.descripcion}</p>
                        <a href={project.link}>Visitar proyecto</a>
                    </div>
                )}
            </div>
        </>
    );
}

export default Portfolio;