import React from 'react';
import CuadroRosa from './CuadroRosa';


const Nombre = ({nombres, dispatch}) => {

    const {nombre, segundo, paterno, materno } = nombres;

    const  handleChange = ({target:{value,id}}) => {

        const action = {
            type: 'actualizarNombres',
            payload: {...nombres,[id]:value}
        }
        dispatch(action);
        
    }
    return (
        <>
        <div className="col-8 divPreguntas">
            <h4 className="text-bold">¿Cual es tu nombre?</h4>
            <input id="nombre" type="text" className="form-control" placeholder="Nombre" defaultValue={nombre} onChange={ handleChange }/>
            <input id="segundo" type="text" className="form-control" placeholder="Segundo nombre" defaultValue={segundo}  onChange={ handleChange }/>
            <input id="paterno" type="text" className="form-control" placeholder="Apellido paterno" defaultValue={paterno}  onChange={ handleChange }/>
            <input id="materno" type="text" className="form-control" placeholder="Apellido materno" defaultValue={materno}  onChange={ handleChange }/>
        </div>
            { (nombre ||segundo ||paterno || materno) && <CuadroRosa className="cuadroRosa" data={[`${ nombre } ${ segundo } ${ paterno } ${ materno }`]} /> }
        </>
        
    )
}

export default Nombre;
