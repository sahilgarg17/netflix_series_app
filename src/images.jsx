import React from 'react';

const Images = (props) => {
    return (
        <img src = {props.imgsrc} alt = "thispic" className = "card__img" />
    );
}

export default Images;