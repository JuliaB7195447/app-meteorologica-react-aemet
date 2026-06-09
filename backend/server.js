// Importar dependencias
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;
//console.log('Clave AEMET cargada: ', process.env.AEMET_API_KEY ? 'si' : 'no');    //lo use para comprobar que backend/.env carga bien api_key

// Middlewares
app.use(cors()); // Permitir peticiones desde cualquier origen
app.use(express.json()); // Parsear JSON en el body de las peticiones

// Ruta principal de bienvenida
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API proyecto meteo con AEMET',
    endpoints: {
      '/api/tiempo/:codigoMunicipio': 'Prediccion diaria de un municipio'
    }
  });
});

// Ruta recibe un código de municipio, consulta la API de AEMET,
// simplifica la respuesta y devuelve solo los datos necesarios al frontend.
app.get('/api/tiempo/:codigoMunicipio', async (req, res) => {
  try {
    const { codigoMunicipio } = req.params;
    const apiKey = process.env.AEMET_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'No se ha encontrado la API key de AEMET'
      });
    }

const urlAemet = `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/${codigoMunicipio}?api_key=${apiKey}`;

const respuestaAemet = await fetch(urlAemet);

    if (!respuestaAemet.ok) {
      throw new Error('Error al consultar AEMET');
    }

const datosRespuesta = await respuestaAemet.json();

    if (!datosRespuesta.datos) {
      return res.status(404).json({
        success: false,
        error: 'AEMET no ha devuelto datos para ese municipio'
      });
    }

const respuestaDatos = await fetch(datosRespuesta.datos);
const prediccion = await respuestaDatos.json();

const datosMunicipio = prediccion[0];
const dias = datosMunicipio.prediccion.dia;

const prediccionSimplificada = dias.map((dia) => {
  return {
    fecha: dia.fecha,
    estadoCielo: dia.estadoCielo[0]?.descripcion || 'Sin datos',
    temperaturaMaxima: dia.temperatura.maxima,
    temperaturaMinima: dia.temperatura.minima,
    probPrecipitacion: dia.probPrecipitacion[0]?.value ?? 'Sin datos',
    vientoDireccion: dia.viento[0]?.direccion || 'Sin datos',
    vientoVelocidad: dia.viento[0]?.velocidad ?? 'Sin datos'
  };
});

// saco solo los datos necesarios
res.json({
  success: true,
  municipio: datosMunicipio.nombre,
  provincia: datosMunicipio.provincia,
  codigoMunicipio: codigoMunicipio,
  prediccion: prediccionSimplificada
});

  } catch (error) {
  console.error(error.message);

  res.status(500).json({
    success: false,
    error: 'Error al obtener la predicción meteorológica',
    detalles: error.message
  });
}
});

// Ruta para manejar endpoints no encontrados
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint no encontrado'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
