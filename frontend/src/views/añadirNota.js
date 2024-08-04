import React, { useState } from "react";
import { Container, Box, Button, Input, Typography } from '@mui/material';

function AñadirNota() {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [resumen, setResumen] = useState('');
    const [fechaPublicacion, setFechaPublicacion] = useState('');
    const [url, setUrl] = useState('');
    const [autor, setAutor] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const resumenGenerado = contenido.split('.')[0]; // Extrae el resumen hasta el primer punto

        const noticia = {
            titulo,
            contenido,
            resumen: resumenGenerado,
            fechaPublicacion,
            url,
            autor
        };

        try {
            const response = await fetch('http://localhost:8080/noticia/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noticia),
            });

            if (!response.ok) {
                throw new Error('Error al añadir la nota: ' + response.statusText);
            }

            alert('Nota añadida correctamente');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="añadir-formulario">
            <Container
                maxWidth="sm"
                sx={{
                    border: "solid" ,
                    backgroundColor: 'White',
                    padding: '20px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant="h6" sx={{ color: 'black', marginBottom: '5px' }}>
                    Añadir Nota
                </Typography>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    sx={{ width: '100%' }}
                >
                    <Box sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" sx={{ color: 'black', marginBottom: '8px' }}>
                            Título
                        </Typography>
                        <Input
                            fullWidth
                            placeholder="Título"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            sx={{
                                color: 'black',
                                backgroundColor: 'transparent',
                                border: '1px solid black',
                                borderRadius: '4px',
                                padding: '10px',
                                '&::placeholder': { color: 'black' }
                            }}
                        />
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" sx={{ color: 'black', marginBottom: '8px' }}>
                            Fecha
                        </Typography>
                        <Input
                            fullWidth
                            placeholder="Fecha"
                            type="date"
                            value={fechaPublicacion}
                            onChange={(e) => setFechaPublicacion(e.target.value)}
                            sx={{
                                color: 'black',
                                backgroundColor: 'transparent',
                                border: '1px solid black',
                                borderRadius: '4px',
                                padding: '10px',
                                '&::placeholder': { color: 'black' }
                            }}
                        />
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" sx={{ color: 'black', marginBottom: '8px' }}>
                            Autor
                        </Typography>
                        <Input
                            fullWidth
                            placeholder="Autor"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                            sx={{
                                color: 'black',
                                backgroundColor: 'transparent',
                                border: '1px solid black',
                                borderRadius: '4px',
                                padding: '10px',
                                '&::placeholder': { color: 'black' }
                            }}
                        />
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" sx={{ color: 'black', marginBottom: '8px' }}>
                            URL de imagen
                        </Typography>
                        <Input
                            fullWidth
                            placeholder="URL de imagen"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            sx={{
                                color: 'black',
                                backgroundColor: 'transparent',
                                border: '1px solid black',
                                borderRadius: '4px',
                                padding: '10px',
                                '&::placeholder': { color: 'black' }
                            }}
                        />
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" sx={{ color: 'black', marginBottom: '8px' }}>
                            Contenido
                        </Typography>
                        <Input
                            fullWidth
                            placeholder="Contenido"
                            multiline
                            rows={2}
                            value={contenido}
                            onChange={(e) => setContenido(e.target.value)}
                            sx={{
                                color: 'black',
                                backgroundColor: 'transparent',
                                border: '1px solid black',
                                borderRadius: '4px',
                                padding: '10px',
                                '&::placeholder': { color: 'black' }
                            }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: '20px' , bgcolor:"#b10b1f" }}
                    >
                        Añadir Nota
                    </Button>
                </Box>
            </Container>
        </div>
    );
}

export default AñadirNota;
