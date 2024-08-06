import React from "react";
import { useDispatch } from "react-redux";

import { eliminarNoticia } from "../../actions/noticias";

const NoticiasAdmin = ({ titulo, resumen, id }) => {
  const dispatch = useDispatch();

  const ondeleteNoticia = () => {
    dispatch(eliminarNoticia(id));
    window.location.href="/noticiasAdmin";
  };

  return (
    <div className="noticiaComponent">
      <div className="detallesNoticia">
        <h3>{titulo}</h3>
        <p class="resumen-color">{resumen}</p>
      </div>
      <div className="botones">
        <a href={"/editNotice/" + id}>
          <button className="buttonEdit btn btn-outline-info">
            <img src="lapiz.png" class="updateImg"></img>
          </button>
        </a>
      </div>
      <div className="botones">
        <button className="buttonEdit btn btn-outline-danger" onClick={() => ondeleteNoticia()}>
          <img src="borrar.png" class="deleteImg"></img>
        </button>
      </div>
    </div>
  );
};

export default NoticiasAdmin;
