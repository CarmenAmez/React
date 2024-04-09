import { First, GlobalStyle } from './Box.styles'

const Box = () => {
  return (
    <div>
      <GlobalStyle />
      
      <First isBlue = {true}> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Earum suscipit facere repudiandae quas, quibusdam ea?</p></First>
      
    </div>


  )
}

export default Box