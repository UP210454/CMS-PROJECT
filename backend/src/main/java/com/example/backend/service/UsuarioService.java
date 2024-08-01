package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dto.UsuarioDTO;
import com.example.backend.mapper.UsuarioMapper;
import com.example.backend.model.Usuario;
import com.example.backend.repository.UsuarioRepository;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
 
    public List<Usuario> getAllUsers(){
        return usuarioRepository.findAll();
    }
    
    public Optional<Usuario>getUserbyId(Long id){
        return usuarioRepository.findById(id);
    }
    
    public Usuario saveUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public void deleteUser(Long id){
        usuarioRepository.deleteById(id);
    }

    // Method to update a user
    public Optional<Usuario> updateUsuario(Long id, Usuario newUsuarioData) {
        return usuarioRepository.findById(id)
            .map(usuario -> {
                usuario.setNombre(newUsuarioData.getNombre());
                usuario.setEmail(newUsuarioData.getEmail());
                usuario.setContrasena(newUsuarioData.getContrasena());
                return usuarioRepository.save(usuario);
            });
    }
}