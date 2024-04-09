import { useState } from 'react'

const Rectangulo2 = () => {
        const [base, setBase] = useState();
        const [altura, setAltura] = useState();
        const [area, setArea] = useState();
    
        const procesar = () => {
            const area = base * altura;
            setArea(area);
        }
        return (
            <div>
                <input type="text" value={base} onChange={(e) => setBase(e.target.value)} />
                <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
                <button onClick={procesar}>Calcular</button>
                <p>{area}</p>
            </div>
        )
}
/**onClick={() => setArea(base, altura)}>Calcular */

export default Rectangulo2