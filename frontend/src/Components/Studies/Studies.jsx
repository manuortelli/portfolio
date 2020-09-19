import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Studies.css'

function Studies() {
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
                    <div className="card-title">{studies.title}</div>
                    <p className="card-year"> {studies.ageBegin} - {studies.ageEnd}</p>
                    <p className="card-text">{studies.descripcion} en {studies.school}</p>
                    </div>
                  </div>
                )}
                 </ul>
            </div>
        </>
    );

}


export default Studies;