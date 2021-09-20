import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div className="countries">
            <h1>Explore all <span className="countries-num">{countries.length}</span> Countries</h1>
            {console.log(countries[0])}
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.name} country={country} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;