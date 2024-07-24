import React from "react";

const NoticiasAdmin = ({titulo, resumen, id}) => {
  return (
    <div className="noticiaComponent">  
        <div className="detallesNoticia">
          <h1>{titulo}</h1>
          <p>{resumen}</p>
        </div>
        <div className="botones">
          <button className="buttonEdit">Lápiz</button>      
        </div>
        <div className="botones">
          <button className="buttonEdit">Dlt</button>
        </div>
    </div>
  );
};

export default NoticiasAdmin;
