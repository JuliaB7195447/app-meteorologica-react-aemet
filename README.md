# app-meteorologica-react-aemet
Aplicación meteorológica con React, Vite, Node, Express y API de AEMET.

# Aplicación Meteorológica React + AEMET

## Descripción

Aplicación web desarrollada para el módulo de Desarrollo Web en Entorno Cliente (DAW).

Permite consultar la predicción meteorológica semanal de un municipio utilizando los datos proporcionados por la API de AEMET.

La aplicación se divide en dos partes:

* Backend desarrollado con Node.js y Express.
* Frontend desarrollado con React.

El backend se encarga de consultar la API de AEMET y simplificar la respuesta antes de enviarla al frontend.

El frontend permite introducir un código de municipio y visualizar la predicción meteorológica semanal.

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
* Validación del código de municipio.
* Gestión de errores.
* Comunicación entre frontend y backend mediante fetch.
* Diseño responsive básico.
* Visualización de la información mediante tarjetas.

---

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
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

Crear un archivo `.env` con:

```env
AEMET_API_KEY=TU_API_KEY
PORT=3000
```

Iniciar servidor:

```bash
npm start
```

---

## Configuración del frontend

Abrir otra terminal.

Entrar en la carpeta frontend:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Iniciar aplicación:

```bash
npm run dev
```

---

## Uso

Introducir un código de municipio válido y pulsar el botón "Buscar".

Ejemplos:

* 30016 → Cartagena
* 30030 → Murcia

La aplicación mostrará:

* Fecha
* Temperatura máxima
* Temperatura mínima
* Estado del cielo
* Probabilidad de lluvia
* Información del viento

---

## Autor

Proyecto realizado por Julia Bosianek para el módulo de Desarrollo Web en Entorno Cliente (DAW).

