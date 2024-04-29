import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import {getCharacterById} from '../api/characters?';
import {StyledInfoContainer, StyledCharacterImage, StyledCharacterInfo, StyledCharacterList } from '../components/styled'; 

const Info = () => {

    const {id} = useParams();

    const [characters, setCharacters] = useState();

    useEffect(() => {
        getCharacterById(id).then(characters => {
            setCharacters(characters.data);
        });
    }, []);
    return (
        <StyledInfoContainer>
        <StyledCharacterImage src={characters?.image} alt="" />
        <StyledCharacterInfo>
            <h2>{characters?.name}</h2>
            <StyledCharacterList>
                <li>{characters?.species}</li>
                <li>{characters?.gender}</li>
                <li>{characters?.status}</li>
            </StyledCharacterList>
        </StyledCharacterInfo>
    </StyledInfoContainer>
    );
};

export default Info