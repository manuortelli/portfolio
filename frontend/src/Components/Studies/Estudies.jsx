import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Estudies() {
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('https://manuortelliportfoliobackend.herokuapp.com/about')
            .then(
                res => setInformation(res.data[0])
            )
    }, [setInformation])
    return (
        <div className="container-About">
            <div className="containerPhoto">
                {console.log(information.photo)}
                <img className="photo" alt="FotoDePerfil" src={information.photo}>
                </img>
            </div>
            <div className="description">
                <h1 className="name">{information.name}</h1>
                <h3>{information.profession}</h3>
                <p className="aboutMe">{information.about_me}</p>
                {/*<ul className="skills">
                    { information.skills && information.skills.map((skill,index) =>
                           <li>{skill}</li>
                   )}
                    </ul>*/}
            </div>
        </div>
    );
}

export default Estudies;