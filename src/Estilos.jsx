import './Style/style.css';
import dog from './assets/img/1062-367x267.jpg'
import { Box } from './Style/styled';


const Estilos = () => {
    return (
        <div>
            <div className="box"></div>
            <img src={dog} alt="" />
            <Box/>
        </div>
    )
}

export default Estilos;