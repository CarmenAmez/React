import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
        font-family:Arial, Helvetica, sans-serif;
        font-size: 1.3rem;
        color: black;
        padding: 20px;
	}

`;
export const Parrafo = styled.p`

    background-color: ${({fondo}) => (fondo ? "#a3b18a" : "transparent")};


`;