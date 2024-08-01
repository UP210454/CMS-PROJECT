package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "noticia")
public class Noticia {
    @Id
    @Column(name = "id_noticia")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNoticia;

    private String titulo;

    @Lob
    private String contenido;

    @Lob
    private String resumen;

    @Column(name = "fecha_publicacion")
    private LocalDate fechaPublicacion;

    private String url;

    private String autor;  // Asegúrate de que sea un String si en la base de datos es un VARCHAR
}