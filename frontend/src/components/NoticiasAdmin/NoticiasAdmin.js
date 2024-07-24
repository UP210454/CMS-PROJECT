import React from "react";
import './NoticiasAdmin.css';

const NoticiasAdmin = () => {
  return (
    <div className="noticiaComponent">  
        <div className="detallesNoticia">
          <h1>Titulo</h1>
          <p>lsdfnñksenfijnqejkfnlkefnlksdanfksdlkfnlknfksnflknslkfnlksnflknsflkmsjaakandflsndflksdlfknlksdfaenfdsdfklkdfñkl</p>
          <p>Fecha</p>
        </div>
        <div className="botones">
          <button className="buttonEdit">Updt</button>         
        </div>
        <div className="botones">
          <button className="buttonEdit">Dlt</button>
        </div>
    </div>
  );
};

export default NoticiasAdmin;
