import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css';

function About () {
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('https://manuortelliportfoliobackend.herokuapp.com/about')
        .then(
            res => setInformation(res.data[0])
        )}, [setInformation])
    return(
        <div className="About">
            <div className="Container-photo">
                <img className="photo" src={information.photo}>

                </img>
            </div>
            <div className="Description">
                <h1></h1>
                <h2></h2>
                <p></p>
                <ul className="Skills">

                </ul>
            </div>
        </div>
    );
}

export default About;