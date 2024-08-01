package com.example.backend.controller;

import com.example.backend.dto.UsuarioDTO;
import com.example.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> getAllUsers() {
        List<UsuarioDTO> usuarios = usuarioService.getAllUsers();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> getUserById(@PathVariable Long id) {
        Optional<UsuarioDTO> usuario = usuarioService.getUserById(id);
        return usuario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> createUser(@RequestBody UsuarioDTO usuarioDTO) {
        UsuarioDTO savedUsuario = usuarioService.saveUsuario(usuarioDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUsuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsuarioDTO> updateUser(@PathVariable Long id, @RequestBody UsuarioDTO usuarioDTO) {
        Optional<UsuarioDTO> updatedUsuario = usuarioService.updateUsuario(id, usuarioDTO);
        return updatedUsuario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        if (usuarioService.deleteUser(id) == null){
            return new ResponseEntity<>("User "+id +" is not founded", HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>("User "+id +" deleted", HttpStatus.OK);
        }
    }
}
