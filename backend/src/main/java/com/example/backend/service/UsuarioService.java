package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Usuario;
import com.example.backend.repository.UsuarioRepository;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> getUsers(){
        return usuarioRepository.findAll();
    }
    
    public Optional<Usuario>getUser(Long id){
        return usuarioRepository.findById(id);
    }
    
    public void eliminar(Long id){
        usuarioRepository.deleteById(id);
    }
}