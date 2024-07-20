import {LISTAR_NOTICIAS, DETALLES_NOTICIA} from '../actions/types';

const initialState = {
    listado: [],
    detalles: null
};

export default (state = initialState, action) => {

    const { type, payload } = action;

    switch ( type ) {
        case LISTAR_NOTICIAS:
            return {
                ...state,
                listado: payload
            };
        case DETALLES_NOTICIA:
            return {
                ...state,
                detalles: payload
            };
        default:
            return state;
    }
}