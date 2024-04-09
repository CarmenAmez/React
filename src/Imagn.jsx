import { useState } from 'react'

    const LOREM_IMAGES = {
        img1: "../704-367x267.jpg",
        img2: "../731-367x267.jpg",
        img3: "../807-367x267.jpg",
    };

const Imagn = () => {

    const [picture, setPicture] = useState();
    return (
        <div>
            <button onClick={() => setPicture(LOREM_IMAGES.img1)}>Img 1</button>
            <button onClick={() => setPicture(LOREM_IMAGES.img2)}>Img 2</button>
            <button onClick={() => setPicture(LOREM_IMAGES.img3)}>Img 3</button> <br />

            <img src={picture} />
        </div>

    )
}

export default Imagn