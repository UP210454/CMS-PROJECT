import React from 'react';

const DetalleNota = () => {
  return (
    <div>
        
        <br/>
        <br/>
        <br/>
        <div class="news-container">
            <button className="back-button">
                Regresar
            </button>
            <br/>
            <br/>
            <img class="news-image" src="./assets/img/foto1.jpg" alt="Descripción de la imagen"/>
            <div class="news-title">
                <h1>Titulo</h1>
                <h5>Autor</h5>
            </div>
           
            <p class="news-text">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lacus id leo tristique, non dictum est placerat. 
                Proin eleifend ante eu justo tincidunt, at varius lorem hendrerit. Nulla facilisi. Sed id fermentum eros. Duis at consequat justo.
                Nullam eleifend nisl id ultrices fermentum. Nulla facilisi. Sed tristique dolor et turpis egestas, vitae suscipit ex venenatis. 
                Nullam ut turpis ac nunc eleifend mattis. Nulla facilisi. Morbi vitae venenatis lacus. Sed aliquam posuere tincidunt. Sed a neque 
                eget libero posuere lobortis. In ornare vitae ligula in consectetur. Aenean ultrices dolor sit amet diam congue fringilla. Nam 
                vulputate ante sed tellus sollicitudin, eget tincidunt erat tristique.
            </p>
        </div>
    </div>
    
  );
};

export default DetalleNota;
