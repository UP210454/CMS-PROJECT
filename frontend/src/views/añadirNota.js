import React from "react";
import { Container, TextField, Box } from '@mui/material';
function AñadirNota () {
    return (
        <div>
          <br/>
          <br/>
          <Container
          maxWidth="sm"
          sx={{
            marginTop: '20px',
            backgroundColor: 'gray',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Box component="form" noValidate autoComplete="off">
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
            />
          </Box>
        </Container>
        </div>
    );
}
export default AñadirNota;