import React, { useState } from 'react';

export default function ContactCard(props) {
    const [showAge, setShowAge] = useState(false);
    return (
        <div className="contact-card">
            <img src={props.avatar} alt="profile">
            </img>
            <div>
                <p>Nombre: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={() =>{
                    setShowAge(!showAge)
                }}>SHOW AGE</button>
                {showAge ? <p>Edad: {props.edad}</p> : null}
            </div>
        </div>);
}
