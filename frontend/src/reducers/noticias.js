import {LISTAR_NOTICIAS} from '../actions/types';

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
        default:
            return state;
    }
}