import styled from 'styled-components';

export const Back = styled.div`
    background: #cdb4db;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    position:fixed;
    top:0;
    left:0;

    div{
        background-color: white;
        border-radius: 5px;
        padding: 30px;
        margin: 50px;
    width: 600px;
    height:300px;
    }

    button{
        border-radius: 30px;
        margin: 10px;
        padding: 10px;
        background-color: #cdb4db;
        float: inline-end;
    }
`