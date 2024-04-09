import { useRef } from 'react'

const Rectangulo = () => {
        const baseRef = useRef();
        const alturaRef = useRef();
        const areaRef = useRef();
    
        const procesar = () => {
            const base = baseRef.current.value;
            const altura = alturaRef.current.value;
            areaRef.current.innerHTML = base * altura;
        }
        return (
            <div>
                <input type="text" ref={baseRef} />
                <input type="text" ref={alturaRef} />
                <button onClick={procesar}>Calcular</button>
                <div ref={areaRef}></div>
            </div>
        )
}


export default Rectangulo