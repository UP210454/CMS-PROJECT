import React, { useState } from "react";
import { Container, TextField, Box, Button, MenuItem } from '@mui/material';
const authors = ['Author 1', 'Author 2', 'Author 3']; 

function AñadirNota () {
  const [nota, setNota] = useState({
    titulo: '',
    fecha: '',
    autor: '',
    urlImagen: '',
    contenido: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNota((prevNota) => ({
      ...prevNota,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Note:', nota);
    
  };

  return (
    <div>
      <br />
      <br />
      <Container
        maxWidth="sm"
        sx={{
          marginTop: '20px',
          backgroundColor: 'black',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Título"
            name="titulo"
            variant="outlined"
            margin="normal"
            value={nota.titulo}
            onChange={handleChange}
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
          />
          <TextField
            fullWidth
            label="Fecha"
            name="fecha"
            type="date"
            variant="outlined"
            margin="normal"
            value={nota.fecha}
            onChange={handleChange}
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
          />
          <TextField
            fullWidth
            select
            label="Autor"
            name="autor"
            variant="outlined"
            margin="normal"
            value={nota.autor}
            onChange={handleChange}
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
          >
            {authors.map((author) => (
              <MenuItem key={author} value={author}>
                {author}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="URL de imagen"
            name="urlImagen"
            variant="outlined"
            margin="normal"
            value={nota.urlImagen}
            onChange={handleChange}
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
          />
          <TextField
            fullWidth
            label="Contenido"
            name="contenido"
            variant="outlined"
            margin="normal"
            multiline
            rows={10}
            value={nota.contenido}
            onChange={handleChange}
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
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: '20px', backgroundColor: 'white', color: 'black' }}
          >
            Enviar
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default AñadirNota;