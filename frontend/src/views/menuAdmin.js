import React from "react";
import NoticiasAdmin from "../components/NoticiasAdmin/NoticiasAdmin";

function MenuAdmin() {

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="tituloAdmin"><i>Administración de Noticias</i></h1>
            <NoticiasAdmin></NoticiasAdmin>
            <NoticiasAdmin></NoticiasAdmin>
            <NoticiasAdmin></NoticiasAdmin>
                   
        </div>
    );
}

export default MenuAdmin;