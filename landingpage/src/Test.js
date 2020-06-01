import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export const Test = (props) => {
    console.log(props.activo);
    return (
        <>
            <h1>{props.titulo}</h1>
            <h2>{props.descripcion}</h2>
        </>
    )
}

Test.propTypes = {
    titulo: PropTypes.string,
    descripcion: PropTypes.string.isRequired
}

//export default Test;