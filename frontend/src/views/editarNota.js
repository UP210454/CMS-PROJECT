import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Box, Button, Input, Typography } from '@mui/material';

import { obtenerNoticia, editarNoticia } from '../actions/noticias';

function EditarNota() {

    const { id } = useParams();

    const dispatch =  useDispatch();
    
    const { detalles } = useSelector(state => state.noticias);
    
    const [noticia, setNoticia] = useState({
        idNoticia: null,
        titulo: null,
        contenido: null,
        resumen: null,
        fechaPublicacion: null,
        url: null,
        autor: null
    });

    useEffect(() => {
        dispatch(obtenerNoticia(id));
    }, [id]);

    useEffect(() => {
        if(detalles){
            console.log(detalles.fechaPublicacion);
            let fecha_formateada = null;
            if(detalles.fechaPublicacion){
                if(detalles.fechaPublicacion.length == 3){
                    fecha_formateada = detalles.fechaPublicacion[0] + '-' + padWithZeros(detalles.fechaPublicacion[1]) + '-' + padWithZeros(detalles.fechaPublicacion[2]);
                }
            }
            console.log(fecha_formateada);
            setNoticia({
                idNoticia: id,
                titulo: detalles.titulo,
                contenido: detalles.contenido,
                resumen: detalles.resumen,
                fechaPublicacion: fecha_formateada,
                url: detalles.url,
                autor: detalles.autor
            });
        }
    }, [detalles]);

    const padWithZeros = (value) => {
        const str = String(value);
        if (str.length < 2) {
          return str.padStart(2, '0');
        }
        return str;
      }

    const onchangeNoticia = (e) => {
        setNoticia({
            ...noticia, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const resumenGenerado = noticia.contenido.split('.')[0]; // Extrae el resumen hasta el primer punto

        const noticia_editada = {
            idNoticia: noticia.idNoticia,
            titulo: noticia.titulo,
            contenido: noticia.contenido,
            resumen: resumenGenerado,
            fechaPublicacion: noticia.fechaPublicacion,
            url: noticia.url,
            autor: noticia.autor
        };

        await dispatch(editarNoticia(noticia_editada));
        window.location.href="/noticiasAdmin";

        /* try {
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
        } */
    };

    return (
        <div className="añadir-formulario mt-5 pt-4">
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
                    Editar Nota
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
                            value={noticia.titulo}
                            name= "titulo"
                            onChange={(e) => onchangeNoticia(e)}
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
                            value={noticia.fechaPublicacion}
                            name= "fechaPublicacion"
                            onChange={(e) => onchangeNoticia(e)}
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
                            value={noticia.autor}
                            name= "autor"
                            onChange={(e) => onchangeNoticia(e)}
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
                            value={noticia.url}
                            name= "url"
                            onChange={(e) => onchangeNoticia(e)}
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
                            value={noticia.contenido}
                            name= "contenido"
                            onChange={(e) => onchangeNoticia(e)}
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
                        Guardar Nota
                    </Button>
                </Box>
            </Container>
        </div>
    );
}

export default EditarNota;
