import { useState, useEffect } from 'react';
import { Box, Heading, List, ListItem } from '../components/styled'; 
import { Link } from 'react-router-dom';
import {getCharacters} from '../api/characters';

const Inicio = () => {
    const [characters, setCharacters] = useState();

    useEffect(() => {
        getCharacters().then(characters => {
            setCharacters(characters.data.results);
            console.log(characters);
        });
    }, []);

    return (
        <Box>
            <Heading> Characters of Rick & Morty</Heading>
            <List>
                {characters?.map((character) => (
                    <Box key={character.id} style={{ flex: 1 }}>
                        <Heading as="h3">{character.name}</Heading>
                        <Link to= {"/info/" + character.id}><img src={character.image} alt="" /></Link> 
                        <ListItem>{character.status}</ListItem>
                    </Box>
                ))}
            </List>
        </Box>
    );
};

export default Inicio;