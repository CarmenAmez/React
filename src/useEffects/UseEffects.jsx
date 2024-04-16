import { useState, useEffect } from 'react';
import {getSpell} from './api/api.js';

const App = () => {
    const [spells, setSpells] = useState([]);
    useEffect(() => {
        getSpell().then(things => {
            setSpells(things);
        });
    }, []);
    return (
        <div>
            <h1>Harry Potter: Spells</h1>
            <ul> {spells.map((spell) => (
                <div key={spell}>
                    <li>{spell.name} ({spell.description})</li>
                </div>
            ))}
            </ul>
        </div>
    );
};

export default App;