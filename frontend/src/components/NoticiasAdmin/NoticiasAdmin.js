import React from "react";

const NoticiasAdmin = ({titulo, resumen, id}) => {
  return (
    <div className="noticiaComponent">  
        <div className="detallesNoticia">
          <h3>{titulo}</h3>
          <p class="resumen-color">{resumen}</p>
        </div>
        <div className="botones">
          <button className="buttonEdit btn btn-outline-info"><img src="lapiz.png" class="updateImg"></img></button>      
        </div>
        <div className="botones">
          <button className="buttonEdit btn btn-outline-danger"><img src="borrar.png" class="deleteImg"></img></button>
        </div>
    </div>
  );
};

export default NoticiasAdmin;
