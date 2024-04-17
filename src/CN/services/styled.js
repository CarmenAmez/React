import {styled} from 'styled-components';

export const StyledDiv = styled.div`
color: #333;
font-size: 20px;
font-weight: bold;
text-align: center;
`;

export const StyledH1 = styled.h1`
border-bottom: 1px solid #333;
    `;

export const StyledUl = styled.ul`
        list-style: none;
        color: #333;
        text-align: center;
    `;

export const StyledA = styled.a`
list-style: none;
text-decoration: none;
border: 1px solid #333;
border-radius: 5px;
color: #333;
text-align: center;

&:hover {
        background-color: #f2f2f2;
        color: #780000;
    }
`;