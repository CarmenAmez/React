import { Back } from './styled';

const Popup = ({ setVisible, isVisible }) =>
  <Back isVisible={isVisible}>
    <div>
      <h1>¡Bienvenido!</h1>
      <p>Gracias por querer abrirme :3</p>
      <button onClick={() => setVisible(false)}>No! no me cierres! D:</button>
    </div>
  </Back>;

export default Popup;