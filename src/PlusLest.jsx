import { useState } from 'react'
import CompoPnL from './components/CompoPnL'

const PlusLest = () => {
    const [val, setVal] = useState(0);
    return (
        <div>
            <CompoPnL operation={setVal}></CompoPnL>
            {val}
        </div>
    )
}

export default PlusLest