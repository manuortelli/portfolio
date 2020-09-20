import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Experience.css';

function Experience() {
    const [experience, setExperience] = useState({});
    useEffect(() => {
        axios.get('https://manuortelliportfoliobackend.herokuapp.com/experience')
        .then (
            res => {
                
                setExperience(res.data)
            }
        )
    }, [setExperience])

    return (
        <>
            <div className="box">
                    <p className="estudios">Experiencia</p>
                <div className="container-Studies">

                    {experience.length > 0 && experience.map((experience, index) =>
                        <div className="card text-white " >
                            <div className="card-body">
                                <div className="card-title">{experience.name}</div>
                                <hr className="mt-2 mb-3"/>
                                <p className="card-year"> {experience.yearBegin} - {experience.yearEnd}</p>
                                <p className="card-text">{experience.description} {experience.school}</p>
                            </div>
                        </div>
                    )}

                </div>
                </div>
        </>

    )

}

export default Experience