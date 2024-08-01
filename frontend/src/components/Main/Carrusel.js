import React, {useEffect, useState, Fragment} from "react"
import { useDispatch, useSelector } from 'react-redux';

import { obtenerNoticias } from '../../actions/noticias';
import ItemCarrusel from "./ItemCarrusel";

const Carrusel = () => {

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
    <Fragment class="carrusel-bgcolor">
      <div className="row mx-0 carrusel-bgcolor">
        <div id="carouselExampleCaptions" className="carousel slide offset-md-2 col-md-8">
          <div className="carousel-inner">
            {
		          noticias.map(noticia => (
                  <ItemCarrusel titulo={noticia.titulo} url={noticia.url} id={noticia.idNoticia}></ItemCarrusel>
              ))
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Fragment>
  )
}
export default Carrusel;