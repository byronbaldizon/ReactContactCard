import React, { useState, useEffect } from 'react';
import ContactCard from './components/ContactCard';
import './App.css';


export default function App() {
    const [results, setResults] = useState([])
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=4")
            .then(results => results.json())
            .then(data => {
                setResults(data.results)
            })
    }, []);


    return (
        <div>
            {results.map((result, index) => {
                return (
                    <ContactCard
                        avatar={result.picture.large}
                        name={result.name.first}
                        email={result.email}
                        edad={result.dob.age}
                    />)
            })}
        </div>
    );
}
