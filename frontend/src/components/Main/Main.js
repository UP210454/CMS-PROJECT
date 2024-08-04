import Carrusel from "./Carrusel";
import AlbumNoticias from "./AlbumNoticias";

const Main = () =>{
    return(
        <div>
            <Carrusel></Carrusel>
            <h1 className="tituloAdmin">Noticias</h1>
            <AlbumNoticias></AlbumNoticias>
        </div>
    ) 
}
export default Main;