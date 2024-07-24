import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux';

import NoticiasAdmin from "../components/NoticiasAdmin/NoticiasAdmin";
import { obtenerNoticias } from '../actions/noticias';

function MenuAdmin() {

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
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="tituloAdmin"><i>Administración de Noticias</i></h1>
            {
		            	noticias.map(noticia => (
                            <NoticiasAdmin titulo={noticia.titulo} resumen={noticia.resumen} id={noticia.idNoticia}></NoticiasAdmin>
                        ))
                    }
                   
        </div>
    );
}

export default MenuAdmin;