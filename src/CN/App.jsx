import { useState, useEffect } from 'react';
import { getCategories, getJokeFromCategory } from './services/services';
import { StyledDiv, StyledUl, StyledA, StyledH1} from './services/styled';

const App = () => {
    const [cates, setCates] = useState(null);
    const [cat, setCat] = useState(null);
    const [joke, setJoke] = useState(null);

    useEffect(() => {
        getCategories().then(resto => setCates(resto.data));
    }, []);

    useEffect(() => {
        getJokeFromCategory(cat).then(resto => {
            setJoke(resto.data)
        });
    }, [cat]);




    return (
        <StyledDiv>
            <StyledH1>Chuck Norris</StyledH1>
            <StyledUl>
                {
                    cates && cates.map(obj => <li key={cates} ><StyledA  href="#" onClick={e => { e.preventDefault();
                        setCat(obj);
                    }}>{obj}</StyledA></li>)
                }
            </StyledUl>
            {joke && joke.value}
        </StyledDiv>
    );
};

export default App;