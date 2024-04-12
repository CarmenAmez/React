import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';



export const GlobalStyle = createGlobalStyle`
	body {
        font-size: 1.5rem;
	}
`;
export const Test = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`;