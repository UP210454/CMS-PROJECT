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

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
public class UsuarioController {
    private final UsuarioService usuarioService;

    public UsuarioController(@Autowired UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
    
    @GetMapping({"/allUsers"})
    public ResponseEntity<List<Usuario>> getAllUsers(){
        return ResponseEntity.ok(usuarioService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Usuario>> getUser(@PathVariable Long id){
        return ResponseEntity.ok(usuarioService.getUserbyId(id));
    }

    @PostMapping("/usuario/")
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        return this.usuarioService.saveUsuario(usuario);
    }
}