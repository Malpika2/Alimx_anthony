import React, { useReducer, useState } from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import FechaNacimiento from './FechaNacimiento';
import Nombre from './Nombre';
import Contacto from './Contacto';
import PerfilUsuario from './PerfilUsuario';
import { chatReducer } from '../reducers/chatReducer';
import CuadroRosa from './CuadroRosa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClipboardList, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
const session = sessionStorage;


const AGREGAR_USER = gql`
    mutation createUser($nombre: String!, $segundo: String, $paterno: String, $materno: String, $fechaNacimiento: String, $email: String, $telefono: String) {
        createUser( nombre: $nombre, segundo: $segundo, paterno: $paterno, materno: $materno, fechaNacimiento: $fechaNacimiento, email: $email, telefono: $telefono ) {
            nombre
            segundo
            paterno
            materno
            fechaNacimiento
            email
            telefono
        }
    }
`;



const Chat = () => {
    const [createUser] = useMutation(AGREGAR_USER);
    const initialState = {
        nombres: {
            nombre:'',
            segundo:'',
            paterno:'',
            materno:''
        },
        fecha:{
            dia:'',
            mes:'',
            anio:''
        },
        datosContacto:{
            email:'',
            celular:''
        }
    };
    const [appState, dispatch] = useReducer(chatReducer, initialState);

    const {nombres, fecha, datosContacto } = appState;
    // 
    const { fecha:{dia, mes, anio}, 
            datosContacto:{ email, celular},
            nombres:{nombre, segundo, paterno, materno}
            } = session.getItem('sessionDatoFinal') ? JSON.parse( session.getItem( 'sessionDatoFinal' ) ) : initialState ;
    // DatoFinal es la información a mostrar en el ultimo cuadro rosa
    const [datoFinal, setDatoFinal] = useState([
        `Fecha de nacimiento: ${dia} ${mes} ${anio}`,
        `Correo electrónico: ${email}`,
        `Teléfono celular: ${celular}`,
        `Nombre: ${nombre} ${segundo} ${paterno} ${materno}`
    ]);
    //  () iniciar guarda los datos en session, guarda en la BD atravez de la api, y
    //  muestra los datos ingresados de todas las preguntas.
    const iniciar = () => {
        sessionStorage.clear();
        const {nombre, segundo, paterno, materno } = nombres;
        const {dia, mes, anio } = fecha;
        const {email, celular } = datosContacto;
        setDatoFinal([
            `Fecha de nacimiento: ${dia} ${mes} ${anio}`,
            `Correo electrónico: ${email}`,
            `Teléfono celular: ${celular}`,
            `Nombre: ${nombre} ${segundo} ${paterno} ${materno}`
        ]);
        session.setItem('sessionDatoFinal', JSON.stringify(appState));

        // 
        
        const crear = ( createUser({ variables: { nombre , segundo , paterno, materno, fechaNacimiento:`${dia} ${mes} ${anio}`, email, telefono:celular} }));
        
    }
    return (
        <div className="row col-md-12 col-lg-8 px-0 bg-floralwhite">
            <div className="row col-12 py-4 px-0 mx-0 bg-pink mb-4">
                <h1 className="col-md-12 text-center ">Formulario de registro</h1>

                <span className="col-9">
                    <label className="float-sm-end">
                        <FontAwesomeIcon 
                            icon={faInfoCircle}
                            size="1x"
                        />
                        &nbsp;Contesta las preguntas para guardar tu registro 
                    </label>
                </span>
                <span className="col-3">
                    <FontAwesomeIcon  
                        icon={faClipboardList} 
                        size="6x"
                        className="d-flex float-end"
                    />
                </span>
                
            </div>
            <PerfilUsuario />
            <Nombre 
                nombres={nombres} 
                dispatch={dispatch}
            />
            <PerfilUsuario />
            <FechaNacimiento 
                fecha={fecha} 
                dispatch={dispatch} 
            />
            <PerfilUsuario />
            <Contacto 
                datosContacto={datosContacto} 
                dispatch={dispatch} 
            />
            
            { datosContacto.length < 23 && <div className="col-8 offset-4 bg-lightgray cuadroRosa">
                Si tus datos son correctos por favor continuemos</div>
            }
            
            <button className="btn bg-pink btn-block" onClick={ iniciar  }>Iniciar</button>
            { datoFinal[0].length>23 && <CuadroRosa data={datoFinal} /> }
        </div>
    )
}

export default Chat
