import React from "react";

const ItemCarrusel = ({titulo, url, id}) => {
  return (
        <div className="carousel-item active">
            <a href={"/detalleNota/"+id}><img src={url} className="d-block w-100" alt="..." id="imagenCarrusel"/></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5>{titulo}</h5>
            </div>
        </div>
  );
};

export default ItemCarrusel;