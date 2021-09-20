import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, region, flag, population } = props.country
    return (
        <div className="country">
            <h4>This is: {name}</h4>
            <h5>Capital: {capital}</h5>
            <img src={flag} alt="" />
            <p>Located at {region}</p>
            <p>Total population {population}</p>
        </div>
    );
};

export default Country;