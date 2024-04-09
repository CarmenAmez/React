import { useState } from 'react';
import Popup from './components/popup';

const  Pop= () => {

    const [visible, setVisible] = useState(false);

    return <div> 
        <button onClick={() => setVisible(true)}>¡ABREME!</button>
        <Popup isVisible={visible} setVisible={setVisible}></Popup>
    </div>;
};

export default Pop;