import React from "react"
import Noticia from "./Noticia";

const AlbumNoticias = () => {
    return (
        <div class="album py-5 bg-body-tertiary">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Noticia></Noticia>
                    <Noticia></Noticia>
                    <Noticia></Noticia>
                </div>
            </div>
        </div>
    );
}

export default AlbumNoticias;
