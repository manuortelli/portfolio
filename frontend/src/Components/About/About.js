import React, { useState, userEffect } from 'react';
import axios from 'axios';
import './About/About.css';

About () => {
    const [information, setInformation] = useState({});
    userEffect{() => (
        axios.get(https://manuortelliportfoliobackend.herokuapp.com/about)
    )}
    return();
};

