import { useState } from "react"

const Calcular1 = ({calculate}) => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();


    return (
        <div>
            <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            <button onClick={()=>calculate(num1 * num2)}>Calcular</button>
        </div>
    )
}

export default Calcular1