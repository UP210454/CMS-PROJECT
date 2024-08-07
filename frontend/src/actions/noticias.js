import axios from 'axios';

import { DETALLES_NOTICIA, LISTAR_NOTICIAS} from './types';


export const obtenerNoticias = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`http://64.23.252.141:8080/allNotices`, config);

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
        const res = await axios.get(`http://64.23.252.141:8080/noticia/${id}`, config);

        dispatch({
            type: DETALLES_NOTICIA,
            payload: res.data
        });
    } catch (error){ 
        console.log(error);
    }
}

export const editarNoticia = (noticia) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.put(`http://64.23.252.141:8080/news/${noticia.idNoticia}`, noticia, config);
    } catch (error){ 
        console.log(error);
    }
}

export const eliminarNoticia = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.delete(`http://64.23.252.141:8080/noticia/${id}`, config);
    } catch (error){ 
        console.log(error);
    }
}