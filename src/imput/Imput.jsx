import React, { useState } from 'react';

export const App = () => {
    const [numInputs, setNumInputs] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(0);

    const handleNumberChange = (e) => {
        const value = parseInt(e.target.value);
        setSelectedNumber(value);
        setNumInputs(value);
    };

    return (
        <div>
            <h1>Put a Number</h1>
            <input type="text" value={selectedNumber} onChange={handleNumberChange} />
            <br />
            {[...Array(numInputs)].map((_, index) => (
                <input key={index} type="text" placeholder={`${index + 1}`} />
            ))}
        </div>
    );
}

export default App;



