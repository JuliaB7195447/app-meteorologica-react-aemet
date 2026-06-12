# Aplicación Meteorológica React + AEMET

Aplicación meteorológica desarrollada con React, Vite, Node.js, Express y la API de AEMET.

## Descripción

Aplicación web desarrollada para el módulo de Desarrollo Web en Entorno Cliente (DAW).

Permite consultar la predicción meteorológica semanal de un municipio utilizando los datos proporcionados por la API oficial de AEMET.

La aplicación está dividida en dos partes:

* Backend desarrollado con Node.js y Express.
* Frontend desarrollado con React y Vite.

El backend consulta la API de AEMET y procesa la respuesta para enviar al frontend únicamente la información necesaria.

El frontend permite introducir un código de municipio y visualizar la predicción meteorológica semanal de forma sencilla e intuitiva.

---

## Tecnologías utilizadas

### Backend

* Node.js
* Express
* CORS
* Dotenv

### Frontend

* React
* Vite
* JavaScript
* CSS

### API externa

* AEMET OpenData

---

## Funcionalidades

* Consulta de predicción meteorológica semanal.
* Búsqueda por código de municipio.
* Validación de datos introducidos por el usuario.
* Gestión de errores y mensajes informativos.
* Comunicación entre frontend y backend mediante fetch.
* Diseño responsive básico para móvil y escritorio.
* Visualización de la información mediante tarjetas.
* Separación del frontend en componentes React.

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/JuliaB7195447/app-meteorologica-react-aemet.git
```

Entrar en la carpeta del proyecto:

```bash
cd app-meteorologica-react-aemet
```

---

## Configuración del backend

Entrar en la carpeta backend:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env` con el siguiente contenido:

```env
AEMET_API_KEY=TU_API_KEY
PORT=3000
```

Iniciar el servidor:

```bash
npm start
```

El backend quedará disponible en:

```txt
http://localhost:3000
```

---

## Configuración del frontend

Abrir una segunda terminal.

Entrar en la carpeta frontend:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npm run dev
```

La aplicación quedará disponible en:

```txt
http://localhost:5173
```

---

## Uso

Introducir un código de municipio válido y pulsar el botón **Buscar**.

Ejemplos:

* 30016 → Cartagena
* 30030 → Murcia

La aplicación mostrará:

* Fecha del pronóstico.
* Temperatura máxima.
* Temperatura mínima.
* Estado del cielo.
* Probabilidad de precipitación.
* Información del viento.

---

## Gestión de errores

La aplicación gestiona diferentes situaciones de error:

* Campo de búsqueda vacío.
* Código de municipio no válido.
* Municipios sin datos disponibles.
* Errores de conexión con el servidor.
* Respuestas incorrectas de la API de AEMET.

---

## Estructura del proyecto

```txt
app-meteorologica-react-aemet
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Buscador.jsx
│   │   │   └── TarjetaTiempo.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   └── package.json
│
└── README.md
```

---

## Autor

Proyecto realizado por **Julia Bosianek** para el módulo de Desarrollo Web en Entorno Cliente (DAW).
