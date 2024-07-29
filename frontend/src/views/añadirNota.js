import React, { useState } from "react";
import { Container, TextField, Box, Button } from '@mui/material';

function AñadirNota() {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [autor, setAutor] = useState('');
  const [urlImagen, setUrlImagen] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = { titulo, fecha, autor, urlImagen, contenido };
  
    try {
      const response = await fetch('http://localhost:8080/noticia/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Nota añadida con éxito');
        // Maneja la respuesta si es necesario
      } else {
        // Maneja el error con más detalles
        const errorData = await response.json();
        console.error('Error al añadir la nota:', errorData);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <Container
        maxWidth="sm"
        sx={{
          marginTop: '20px',
          backgroundColor: 'gray',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Título"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' }
              },
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiFormLabel-root': { color: 'white' }
            }}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextField
            fullWidth
            label="Fecha"
            type="date"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true, style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' }
              },
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiFormLabel-root': { color: 'white' }
            }}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <TextField
            fullWidth
            label="Autor"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' }
              },
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiFormLabel-root': { color: 'white' }
            }}
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
          <TextField
            fullWidth
            label="URL de imagen"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' }
              },
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiFormLabel-root': { color: 'white' }
            }}
            value={urlImagen}
            onChange={(e) => setUrlImagen(e.target.value)}
          />
          <TextField
            fullWidth
            label="Contenido"
            variant="outlined"
            margin="normal"
            multiline
            rows={10}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' }
              },
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiFormLabel-root': { color: 'white' }
            }}
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
            Añadir Nota
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default AñadirNota;
