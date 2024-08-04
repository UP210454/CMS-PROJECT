package com.example.backend.config;

import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.backend.mapper.UsuarioMapper;

@Configuration
public class BeanMapper {
    @Bean
    public UsuarioMapper usuarioMapper() {
        return Mappers.getMapper(UsuarioMapper.class);
    }
}
