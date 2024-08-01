import React from "react";

const Login = () => {
  return (
    <div>  
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">La Mexicanita</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/addNotice">Añadir noticia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/noticiasAdmin">Administrador de noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">Iniciar sesión</a>
              </li>
            </ul>
            <div className="d-flex">
              <a><i className="fa-solid fa-user"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Login;
