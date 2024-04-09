import React, { useState } from 'react'

const Saludos = () => {

    const [show, setShow] = useState(0);

    return (
        <div>
            <button onClick={() => setShow(show + 1)}>Pulsar</button>
            
            {
                show % 2 === 0 ? <p>Hola</p> : <p>Adiós</p>
            }
        </div>
    )
}

export default Saludos