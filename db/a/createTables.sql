CREATE DATABASE cms;
USE cms;
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(100) NOT NULL
);

CREATE TABLE noticia (
    id_noticia INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    contenido TEXT NOT NULL,
    resumen TEXT,
    fecha_publicacion DATE NOT NULL,
    url VARCHAR(255),
    autor VARCHAR(200)
);