import { useRef } from 'react'

const Grados = () => {
    const gradoRef = useRef();
    const fahrenheitRef = useRef();

    const procesar = () => {
        const grados = gradoRef.current.value;
        const fahrenheit = grados * 9/5 + 32;
        fahrenheitRef.current.innerHTML = grados + 'ºC son ' + fahrenheit + 'ºF';
    }
    return (
        <div>
            <input type="text" ref={gradoRef} />
            <button onClick={procesar}>Calcular</button>
            <div ref={fahrenheitRef}></div>
        </div>
    )
}

export default Grados;
