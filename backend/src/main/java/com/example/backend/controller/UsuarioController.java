package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Usuario;
import com.example.backend.service.UsuarioService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class UsuarioController {
    private final UsuarioService usuarioService;

    public UsuarioController(@Autowired UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
    
    @GetMapping({"/allUsers"})
    public ResponseEntity<List<Usuario>> getUsers(){
        return ResponseEntity.ok(usuarioService.getUsers());
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Optional<Usuario>> getUser(@PathVariable Long id){
        return ResponseEntity.ok(usuarioService.getUser(id));
    }   
}