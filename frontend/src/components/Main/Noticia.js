import React from "react";

const Noticia = ({titulo, contenido}) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src="./assets/img/foto1.jpg" />
        <div className="card-body">
          <p>
            <b>{titulo}</b>
          </p>
          <p className="card-text">{contenido}</p>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
