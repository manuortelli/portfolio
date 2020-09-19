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
                    <li>
                        <div className="individual-card" key={index}>
                            <h3>{studies.title}</h3>
                            <h4>{studies.descripcion}</h4>
                        </div>
                    </li>
                )}
                 </ul>
            </div>
        </>
    );

}


export default Estudies;