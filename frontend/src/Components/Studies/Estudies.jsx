import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Estudies.css'

function Estudies() {
    const [studies, setStudies] = useState({});
    useEffect(() => {
        axios.get('https://manuortelliportfoliobackend.herokuapp.com/studies')
            .then(
                res => {
                    setStudies(res.data)
                }
            )
    }, [setStudies])
    return (
        <>
            <div className="container-Studies">
                <h1>Estudios</h1>
                <ul>
                    {studies.length > 0 && studies.map((studies, index) =>
                    <div className="card text-white bg-dark mb-3" >
                    <div className="card-body">
                    <div className="card-header">{studies.title}</div>
                    <p className="card-text"> {studies.ageBegin} - {studies.ageEnd}</p>
                    <p className="card-text">{studies.descripcion}</p>
                    </div>
                  </div>
                )}
                 </ul>
            </div>
        </>
    );

}


export default Estudies;