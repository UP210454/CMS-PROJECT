import Carrusel from "./Carrusel";
import Noticia from "./Noticia";

const Main = () =>{
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <Carrusel></Carrusel>
            <br/>
            <div class="album py-5 bg-body-tertiary">
                <Noticia></Noticia>
                <Noticia></Noticia>
            </div>
        </div>
    ) 
}
export default Main;