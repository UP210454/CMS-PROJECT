package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.time.*;

@Data
@Entity
@Table(name="noticia")
public class Noticia {
    @Id
    @Column(name="id_noticia")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idNoticia;

    private String titulo;

    private String contenido;

    private LocalDate fechaPublicacion;

    private Long idAutor;
   
}
