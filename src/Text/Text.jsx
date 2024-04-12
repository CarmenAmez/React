import {GlobalStyle, Parrafo} from './Text.styles';
import lines from './lineas.json';
import { useState } from 'react';

const Text = () => {

  const [linea, setLinea] = useState(0);

  return (
  <div>
    <GlobalStyle />
    <button onClick={() => setLinea (linea - 1)}>Anterior</button>
    <button onClick={() => setLinea (linea + 1)}>Siguiente</button>     
    {
        lines.map((line, index) => (
          <Parrafo fondo = { index === linea } key={index}>{line}</Parrafo>
        ))
      }
  </div>
);

}


export default Text;
