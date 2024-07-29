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

    private String contenido;

    private String resumen;

    @Column(name = "fecha_publicacion")
    private LocalDate fechaPublicacion;

    private String url;

    private String autor;  
}
