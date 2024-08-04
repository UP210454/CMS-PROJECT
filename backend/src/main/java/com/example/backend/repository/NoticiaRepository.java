package com.example.backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.model.Noticia;

public interface NoticiaRepository extends JpaRepository<Noticia,Long>{
    @Query("SELECT n FROM Noticia n WHERE n.autor = :autor")
    List<Noticia> findByAutor(@Param("autor") String autor);
}