import { useState } from "react"

const CompoPnL = ({operation}) => {
    const [val, setVal] = useState(0);
    return (
        <div>
            <button onClick={()=> {
                setVal(val - 1);
                operation (val - 1);
            }}>-</button>
            <input type="text" value={val} onChange={(e)=> {
                setVal(Number(e.target.value));
                operation(Number(e.target.value));
            }} />
            <button onClick={()=>{
                setVal(val + 1);
                operation (val + 1);
            }  }>+</button>
        </div>
    )
}

export default CompoPnL