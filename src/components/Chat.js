import React from 'react'
import FechaNacimiento from './FechaNacimiento'
import Nombre from './Nombre'
import Contacto from './Contacto'
import PerfilUsuario from './PerfilUsuario'
const Chat = () => {
    return (
        <div className="row col-md-6">
            <PerfilUsuario />
            <Nombre/>
            <FechaNacimiento />
            <Contacto />
        </div>
    )
}

export default Chat
