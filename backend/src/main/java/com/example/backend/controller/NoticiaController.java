package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Noticia;
import com.example.backend.service.NoticiaService;

@RestController
public class NoticiaController {
    private final NoticiaService noticiaService;

    @Autowired
    public NoticiaController(NoticiaService noticiaService) {
        this.noticiaService = noticiaService;
    }

    @GetMapping("/autor/{autor}")
    public ResponseEntity<List<Noticia>> getNoticiasByAutor(@PathVariable String autor) {
        List<Noticia> noticias = noticiaService.getNoticiasByAutor(autor);
        return ResponseEntity.ok(noticias);
    }
    
    @GetMapping("/allNotices")
    public ResponseEntity<List<Noticia>> getNoticias() {
        return ResponseEntity.ok(noticiaService.getNoticias());
    }

    @GetMapping("/noticia/{id}")
    public ResponseEntity<Noticia> getNoticia(@PathVariable Long id) {
        return noticiaService.getNoticia(id)
            .map(noticia -> ResponseEntity.ok(noticia))
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/noticia/")
    public ResponseEntity<Noticia> createNoticia(@RequestBody Noticia noticia) {
        Noticia createdNoticia = noticiaService.saveNoticia(noticia);
        return ResponseEntity.ok(createdNoticia);
    }

    @PutMapping("/news/{id}")
    public ResponseEntity<Noticia> updateNews(@PathVariable Long id, @RequestBody Noticia noticiaDetails) {
        return noticiaService.updateNoticia(id, noticiaDetails)
            .map(updatedNoticia -> ResponseEntity.ok(updatedNoticia))
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/noticia/{id}")
    public ResponseEntity<Void> deleteNoticia(@PathVariable Long id) {
        noticiaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
