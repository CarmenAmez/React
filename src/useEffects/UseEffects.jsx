import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [spells, setSpells] = useState([]);

    useEffect(() => {
        axios
        .get('https://hp-api.onrender.com/api/spells')
            .then(response => {
                setSpells(response.data);
            });
    }, []);
    return (
        <div>
            <h1> Harry Potter: Spells </h1>
            <ul> {spells.map((spell) => (
                <div key={spell}>
                    <h3>{spell.name}</h3>  <li>{spell.description}</li>
                </div>
            ))}
            </ul>
        </div>
    );
};

export default App;