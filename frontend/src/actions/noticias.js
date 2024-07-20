import axios from 'axios';

import { DETALLES_NOTICIA, LISTAR_NOTICIAS} from './types';


export const obtenerNoticias = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`http://localhost:8080/allNotices`, config);

        dispatch({
            type: LISTAR_NOTICIAS,
            payload: res.data
        });
    } catch (error){ 
        console.log(error);
    }
}

export const obtenerNoticia = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`http://localhost:8080/noticia/${id}`, config);

        dispatch({
            type: DETALLES_NOTICIA,
            payload: res.data
        });
    } catch (error){ 
        console.log(error);
    }
}