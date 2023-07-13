import './PreviousMatches.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';





export const PreviousMatches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        async function call() {
            const res = await fetch('http://localhost:8000/matches');
            const json = await res.json();

            setMatches(json);
        };
        call();
    }, []);

    return (


        <div className='MainPrevM' >
            <h1>PREVIOUS MATCHES :</h1>
            <Link to='/'><button id='Home'>Home</button></Link>
            {/* Per ovviare al problema della doppia post all'interno del db con .filter prendo solo gli elementi dell'oggetto matches che hanno
            chiave dispari quindi prendo le statistiche di ogni partita un unica volta, utilizzo .sort per ordinare in ordine decrescente le
            varie partite, ed infine per ogni elemento, viene creato <li> che contiene la rappresentazione JSON dell'elemento. */}
            <ol>
                {Object.keys(matches).filter(key => key % 2 !== 0).sort((a, b) => b - a).map(key => <li>
                    Date:{JSON.stringify(matches[key].date)}{'___'}
                    Turns:{JSON.stringify(matches[key].turns)}{'___'}
                    Time:{JSON.stringify(matches[key].time)}{'.'}</li>)}
            </ol>
        </div>
    )
}