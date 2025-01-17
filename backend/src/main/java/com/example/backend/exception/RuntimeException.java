package com.example.backend.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RuntimeException extends Exception {

    private final String code;
    private final transient Object details;

    public RuntimeException(String code, String message, Object details) {
        super(message);
        this.code = code;
        this.details = details;
    }
}
