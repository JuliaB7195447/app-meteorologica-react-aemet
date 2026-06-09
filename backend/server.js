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
    mensaje: 'API proyecto meteo conAEMET',
    endpoints: {
      '/api/tiempo/:codigoMunicipio': 'Prediccion diaria de un municipio'
    }
  });
});

// Ruta provisional para comprobar que recibe el código de municipio
app.get('/api/tiempo/:codigoMunicipio', (req, res) => {
  const { codigoMunicipio } = req.params;

  res.json({
    success: true,
    mensaje: 'Ruta de tiempo OK',
    codigoMunicipio: codigoMunicipio
  });
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
