import styled, { createGlobalStyle } from 'styled-components';
import flecha from './assets/img/flecha.png';

export const Center = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 80px;
`;

export const MainImg = styled.img`
    width: 90%;
    border-radius: 50%;
`;
export const Img = styled.img`
    width: 50%;
    border-radius: 50%;
    ${({ active }) => active ? 'border: 4px solid #C30E0E; z-index:1' : 'border:4px solid transparent'}
`;


export const Test = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;

`

export const Left = styled.button`
    margin: auto;
    display: inline-block;
    cursor: pointer;
    background-image: url(${flecha});
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
`;

export const Right = styled.button`
    transform: scaleX(-1);
    margin: auto;
    display: inline-block;
    cursor: pointer;
    background-image: url(${flecha});
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
`;

export const GlobalStyle = createGlobalStyle`
body{
    display: flex;
    align-items:center;
justify-content:center;
padding: 20px;
background-color: #e9d8a6;
}
`