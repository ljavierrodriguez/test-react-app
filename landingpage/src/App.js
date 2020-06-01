import React from 'react';
import './App.css';
import { Test } from './Test';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Hola desde React</h1>
                    <Test titulo={"Aprendiendo React"} descripcion={"Curso de React Basico"} activo={true} />
                    <i className="fa fa-trash"></i>
                </div>
            </div>
        </div>
    )
}

export default App;