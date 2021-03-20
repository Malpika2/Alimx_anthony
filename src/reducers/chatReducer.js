export const chatReducer = (state = {}, action) => {

    switch (action.type) {
        case 'actualizarNombres':
            const nombres = action.payload;
            return {...state,nombres};

        case 'actualizarFecha':
            const fecha = action.payload;
            return {...state,fecha};

        case 'actualizarDatosContacto':
            const datosContacto = action.payload;
            return {...state,datosContacto};
            
        default:
            return state;
    }
}