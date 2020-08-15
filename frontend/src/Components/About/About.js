import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css';

function About() {
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('https://manuortelliportfoliobackend.herokuapp.com/about')
            .then(
                res => setInformation(res.data[0])
            )
    }, [setInformation])
    return (
        <div className="About">
            <div className="Container-photo">
                <img className="photo" alt="FotoDePerfil" src={information.photo}>
                </img>
            </div>
            <div className="Description">
                <h1>{information.name}</h1>
                <h2>{information.profession}</h2>
                <p>{information.about_me}</p>
                <ul className="Skills">
                    { information.skills && information.skills.map((skill,index) =>
                            <p>{skill}</p>
                   )}
                </ul>
            </div>
        </div>
    );
}

export default About;