package com.example.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dto.UsuarioDTO;
import com.example.backend.mapper.UsuarioMapper;
import com.example.backend.model.Usuario;
import com.example.backend.repository.UsuarioRepository;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, UsuarioMapper usuarioMapper) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioMapper = usuarioMapper;
    }

    public List<UsuarioDTO> getAllUsers() {
        return usuarioRepository.findAll().stream()
            .map(usuarioMapper::toDto)
            .collect(Collectors.toList());
    }

    public Optional<UsuarioDTO> getUserById(Long id) {
        return usuarioRepository.findById(id)
            .map(usuarioMapper::toDto);
    }

    public UsuarioDTO saveUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioMapper.toEntity(usuarioDTO);
        Usuario savedUsuario = usuarioRepository.save(usuario);
        return usuarioMapper.toDto(savedUsuario);
    }

    public String deleteUser(Long id) {
        if (usuarioRepository.findById(id).isPresent() == false){
            return null;
        }
        usuarioRepository.deleteById(id);
        return "Se logro";
        
    }

    public Optional<UsuarioDTO> updateUsuario(Long id, UsuarioDTO usuarioDTO) {
        return usuarioRepository.findById(id)
            .map(existingUsuario -> {
                existingUsuario.setNombre(usuarioDTO.getNombre());
                existingUsuario.setEmail(usuarioDTO.getEmail());
                existingUsuario.setContrasena(usuarioDTO.getContrasena());
                return usuarioRepository.save(existingUsuario);
            })
            .map(usuarioMapper::toDto);
    }

}