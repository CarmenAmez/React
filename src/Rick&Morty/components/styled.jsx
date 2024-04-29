import styled from 'styled-components';

export const Box = styled.div`
    flex: 1;
    padding: 8px;
    box-sizing: border-box;
`;

export const Heading = styled.h3`
    text-align:center;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
    margin: 0;
`;

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const StyledCharacterImage = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius:10px;
`;

export const StyledCharacterInfo = styled.div`
    text-align: center;
`;

export const StyledCharacterList = styled.ul`
    list-style-type: none;
    padding: 0;
`;