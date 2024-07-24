package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Noticia;
import com.example.backend.model.Usuario;
import com.example.backend.service.NoticiaService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class NoticiaController {
    private final NoticiaService noticiaService;

    public NoticiaController(@Autowired NoticiaService noticiaService) {
        this.noticiaService = noticiaService;
    }
    

    @GetMapping({"/allNotices"})
    public ResponseEntity<List<Noticia>> getNoticias(){
        return ResponseEntity.ok(noticiaService.getNoticias());
    }

    @GetMapping("/noticia/{id}")
    public ResponseEntity<Optional<Noticia>> getNoticia(@PathVariable Long id){
        return ResponseEntity.ok(noticiaService.getNoticia(id));
    }   

    @PostMapping("/noticia/")
    public Noticia createNoticia(@RequestBody Noticia noticia) {
        return this.noticiaService.saveNoticia(noticia);
    }

}