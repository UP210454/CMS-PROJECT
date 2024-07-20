package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Autor;
import com.example.backend.service.AutorService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class AutorController {
    private final AutorService autorService;

    public AutorController(@Autowired AutorService autorService) {
        this.autorService = autorService;
    }
    
    @GetMapping({"/allAutors"})
    public ResponseEntity<List<Autor>> getClientes(){
        return ResponseEntity.ok(autorService.getAutors());
    }

    @GetMapping("/autor/{id}")
    public ResponseEntity<Optional<Autor>> getAutor(@PathVariable Long id){
        return ResponseEntity.ok(autorService.getAutor(id));
    }   
}