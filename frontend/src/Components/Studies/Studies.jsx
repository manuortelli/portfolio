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
           
               <div className="box">
                    <p className="estudios">Estudios</p>
                <div className="container-Studies">

                    {studies.length > 0 && studies.map((studies, index) =>
                        <div className="card text-white bg-dark" >
                            <div className="card-body">
                                <div className="card-title">{studies.title}</div>
                                <hr className="mt-2 mb-3"/>
                                <p className="card-year"> {studies.ageBegin} - {studies.ageEnd}</p>
                                <p className="card-text">{studies.descripcion} en {studies.school}</p>
                            </div>
                        </div>
                    )}

                </div>
                </div>
        </>
    );

}


export default Studies;