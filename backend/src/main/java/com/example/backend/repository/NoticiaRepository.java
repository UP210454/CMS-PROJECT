package com.example.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.Noticia;

public interface NoticiaRepository extends JpaRepository<Noticia,Long>{
    
}