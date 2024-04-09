import { useState } from 'react'

const Grados2 = () => {
    const [grado, setGrado] = useState();
    const [fahrenheit, setFarenheit] = useState();

    const procesar = () => {
        const fahrenheit = grado * 9/5 + 32;
        setFarenheit(fahrenheit);
    }
    return (
        <div>
            <input type="text" value={grado} onChange={(e) => setGrado(e.target.value)} />
            <button onClick={procesar}>Calcular</button>
            <p>{fahrenheit}</p>
        </div>
    )
}

export default Grados2;