
import styled, { createGlobalStyle } from 'styled-components';
import font from './fonts/Rolling Stright.otf';

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: #606c38;
        font-family: myFont;
        font-size: 4rem;
        color: black;
	}
    @font-face {
        font-family: myFont;
        src: url(${font});
    }
`;
const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
export const First = styled.div`
    background-color:#e9edc9;
    width: 500px;
    height: 500px;
    margin: auto;
    margin-top: 100px;

p{
    padding: 50px;
    color: ${({isBlue}) => (isBlue ? "#264653" : "#cdb4db")} ;

}

    &:hover {
	background-color: #f7e1d7;
    
}
`;