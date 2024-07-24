import React from "react";

const Noticia = ({titulo, resumen, id, url}) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
          <img src={url}/>
          <div className="card-body">
            <p>
              <b><a href={"/detalleNota/"+id}>{titulo}</a></b>
            </p>
            <p className="card-text">{resumen}</p>
          </div>       
      </div>
    </div>
  );
};

export default Noticia;
