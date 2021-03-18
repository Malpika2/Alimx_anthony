import React, {useState} from 'react'
import CuadroRosa from './CuadroRosa'


const Nombre = () => {

    const [nombres, setNombres] = useState({
        nombre:'',
        segundo:'',
        paterno:'',
        materno:''
    });
    const {nombre, segundo, paterno, materno } = nombres;
    const  handleChange = ({target:{value,id}}) => {
        console.log(id)
        setNombres({...nombres,[id]:value})
    }
    console.log(nombres);
    return (
        <div className="col-8">
            <h3 className="text-bold">¿Cual es tu nombre?</h3>
            <input id="nombre" type="text" className="form-control" placeholder="Nombre" defaultValue={nombre} onChange={ handleChange }/>
            <input id="segundo" type="text" className="form-control" placeholder="Segundo nombre" defaultValue={segundo}  onChange={ handleChange }/>
            <input id="paterno" type="text" className="form-control" placeholder="Apellido paterno" defaultValue={paterno}  onChange={ handleChange }/>
            <input id="materno" type="text" className="form-control" placeholder="Apellido materno" defaultValue={materno}  onChange={ handleChange }/>
            <CuadroRosa nombres={nombres} /> 
          
        </div>
    )
}

export default Nombre
