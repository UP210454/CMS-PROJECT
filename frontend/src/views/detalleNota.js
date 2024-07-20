import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { obtenerNoticia } from '../actions/noticias';

const DetalleNota = () => {
    const { id } = useParams();

    const dispatch =  useDispatch();
    
    const { detalles } = useSelector(state => state.noticias);
    
    const [noticia, setNoticia] = useState(null);

    useEffect(() => {
        dispatch(obtenerNoticia(id));
    }, [id]);

    useEffect(() => {
        setNoticia(detalles);
    }, [detalles]);

    return (
        <div>  
            <br/>
            <br/>
            <br/>
            <div className="news-container">
                <a href='/home'><button className="back-button">
                    Regresar
                </button></a>
                <br/>
                <br/>
                <img className="news-image" src={noticia?.url || "Foto no encontrada"} alt="Descripción de la imagen"/>
                <div className="news-title">
                    <h1>{noticia?.titulo || "Sin titulo"}</h1>
                </div>
                <p className="news-text">
                    {noticia?.contenido || "Error"}
                </p>
            </div>
        </div>
        
    );
};

export default DetalleNota;
