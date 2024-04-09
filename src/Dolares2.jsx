import { useState } from 'react';

const Dolares2 = () => {
    const [euros, setEuros] = useState();
    const [dolares, setDolares] = useState(0);

    const calculate = () => {
        const dolars = euros * 2;
        setDolares(dolars);
    }
    return (
        <div>
            <input type="text" value={euros} onChange={(e) => setEuros(e.target.value)} />
            <button onClick={calculate}>Calcular</button>
            <p>{dolares}</p>
        </div>
    )
}

export default Dolares2;