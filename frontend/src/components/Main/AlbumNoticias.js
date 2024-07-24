import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux';

import Noticia from "./Noticia";


import { obtenerNoticias } from '../../actions/noticias';

const AlbumNoticias = () => {
    const dispatch =  useDispatch();
    
    const { listado } = useSelector(state => state.noticias);
    
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        dispatch(obtenerNoticias());
    }, []);

    useEffect(() => {
        setNoticias(listado);
    }, [listado]);

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
		            	noticias.map(noticia => (
                            <Noticia titulo={noticia.titulo} resumen={noticia.resumen} id={noticia.idNoticia} url={noticia.url}></Noticia>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AlbumNoticias;
