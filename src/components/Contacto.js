import React from 'react';
import CuadroRosa from './CuadroRosa';

const Contacto = ({datosContacto, dispatch}) => {

    const {email, celular } = datosContacto;

    const  handleChange = ({target:{value,id}}) => {

        const action = {
            type: 'actualizarDatosContacto',
            payload: {...datosContacto,[id]:value}
        }
        dispatch(action);
        
    }
    return (
        <div className="col-8 divPreguntas">
            <h4 className="text-bold">Datos de contacto</h4>
            <input id="email" type="email" className="form-control" placeholder="Correo electrónico" defaultValue={email} onChange={ handleChange }/>
            <input id="celular" type="phone" className="form-control" placeholder="Teléfono celular" defaultValue={celular}  onChange={ handleChange }/>
            { (email || celular ) && <CuadroRosa data={[`Correo electrónico: ${ email }`,`Teléfono celular: ${ celular }`]} /> }
        </div>
    )
}

export default Contacto;

