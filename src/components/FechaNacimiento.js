import React from 'react';
import CuadroRosa from './CuadroRosa';

const FechaNacimiento = ({fecha, dispatch}) => {

    const {dia, mes, anio } = fecha;

    const  handleChange = ({target:{value,id}}) => {

        const action = {
            type: 'actualizarFecha',
            payload: {...fecha,[id]:value}
        }
        dispatch(action);
        
    }
    return (
        <div className="col-8 divPreguntas">
            <h4 className="text-bold">¿Cuál es tu fecha de nacimiento?</h4>
            <input id="dia" type="number" className="form-control" placeholder="Dia" defaultValue={dia} onChange={ handleChange }/>
            <select id="mes" class="form-control" onChange={ handleChange }>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
            </select>
            <input id="anio" type="number" className="form-control" placeholder="Año" defaultValue={anio}  onChange={ handleChange }/>
            { ( dia || mes || anio ) && <CuadroRosa data={[`${ dia } ${ mes } ${ anio }`]} /> }
        </div>
    )
}

export default FechaNacimiento;
