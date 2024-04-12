
import { useState } from 'react';
import origquestions from './data/questions'
import { Test, GlobalStyle } from './Trivial.styles';
import Popup from './Popup';
import { shuffleArray } from './Aleatorio';

const questions = shuffleArray(origquestions);

const Trivial = () => {
  const [quiestionIndex, setQuiestionIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const quest = questions[quiestionIndex];


  return (
    <div>
      <GlobalStyle />
      <audio src="./music/friends-cancion.mp3" autoPlay loop />
      <Test>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg' />
        
        {
          quest.question
        }
        {
          quest.answers.map(answer => <p key={answer.txt}><input type="radio" onClick={
            () => {
              if (answer.isRight) {
                if (quiestionIndex === questions.length - 1) {
                  setPopupVisible(true);
                } else {
                  setQuiestionIndex(quiestionIndex + 1);
                }
              } else {
                alert('Respuesta incorrecta! Vuelve a intentarlo');
                setQuiestionIndex(quiestionIndex === 0? 0 : quiestionIndex - 1);
              }
            }
          } /> {answer.txt}</p>)
        }
      </Test>
      <Popup visible={popupVisible} />
    </div>
  );
}



export default Trivial;
