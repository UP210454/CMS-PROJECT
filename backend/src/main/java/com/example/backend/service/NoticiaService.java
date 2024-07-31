package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Noticia;
import com.example.backend.model.Usuario;
import com.example.backend.repository.NoticiaRepository;

@Service
public class NoticiaService {
    private final NoticiaRepository noticiaRepository;

    @Autowired
    public NoticiaService(NoticiaRepository noticiaRepository) {
        this.noticiaRepository = noticiaRepository;
    }

    public List<Noticia> getNoticias(){
        return noticiaRepository.findAll();
    }
    
    public Optional<Noticia>getNoticia(Long id){
        return noticiaRepository.findById(id);
    }

    public Noticia saveNoticia(Noticia noticia) {
        return noticiaRepository.save(noticia);
    }
    
    public void eliminar(Long id){
        noticiaRepository.deleteById(id);
    }

    public Optional<Noticia> updateNoticia(Long id, Noticia newNoticiaData) {
        return noticiaRepository.findById(id)
            .map(noticia -> {
                noticia.setTitulo(newNoticiaData.getTitulo());
                noticia.setContenido(newNoticiaData.getContenido());
                noticia.setResumen(newNoticiaData.getResumen());
                noticia.setFechaPublicacion(newNoticiaData.getFechaPublicacion());
                noticia.setUrl(newNoticiaData.getUrl());
                return noticiaRepository.save(noticia);
            });
    }
}