import { useState } from 'react';
import Calcular1 from './components/Calcular1'
import Calcular2 from './components/Calcular2'

const Calcular = () => {
    const [result, setResult] = useState(0);
    return (
        <div>
            <Calcular1 calculate={setResult}></Calcular1>
            <Calcular2 result={result}></Calcular2>
        </div>
    )
}

export default Calcular