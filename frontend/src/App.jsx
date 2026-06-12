import {useState} from 'react';
import './App.css';

function App(){

  const [codigoMunicipio, setCodigoMunicipio] = useState('30016');
  const [datosTiempo, setDatosTiempo] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  //busca el tiempo del municipio llamando a backend
  const buscarTiempo = async (e) => {e.preventDefault();

  if(codigoMunicipio.trim() === ''){
    setError('Introduce código de municipio');
    setDatosTiempo(null);
    return;
  }

  try{
    setCargando(true);
    setError('');
    setDatosTiempo(null);
      
  const respuesta = await fetch(`http://localhost:3000/api/tiempo/${codigoMunicipio}`);
  const datos = await respuesta.json();
  
  if(!datos.success){
    setError(datos.error || 'Datos no encontrados');
    return;
  }

  setDatosTiempo(datos);
  }catch(error){
    setError('No se ha podido conectar con el servidor');
  }finally{
    setCargando(false);
  }
};

  return(
    <>
      <h1>Aplicación Meteo AEMET</h1>

      <p>Consulta del tiempo en un municipio</p>

      <form onSubmit={buscarTiempo}>
        <label htmlFor="codigo">Código de municipio:</label>

        <input type="text" id="codigo" value={codigoMunicipio} onChange={(e) => setCodigoMunicipio(e.target.value)} />

        <button type="submit">Buscar</button>
      </form>

      {cargando && <p>Cargando datos...</p>}

      {error && <p>{error}</p>}

      {datosTiempo && (
        <section className="resultados">
          <h2>
            {datosTiempo.municipio} ({datosTiempo.provincia})
          </h2>

          <h3>Predicción semanal</h3>

          {datosTiempo.prediccion.map((dia, index) => (
            <article key={index} className="tarjeta-tiempo">
              <h4>{new Date(dia.fecha).toLocaleDateString('es-ES')}</h4>

              <p>Temperatura máxima: {dia.temperaturaMaxima} ºC</p>
              <p>Temperatura mínima: {dia.temperaturaMinima} ºC</p>
              <p>Estado del cielo: {dia.estadoCielo}</p>
              <p>Probabilidad de lluvia: {dia.probPrecipitacion}%</p>
              <p>Viento: {dia.vientoDireccion} - {dia.vientoVelocidad} km/h</p>
            </article>
          ))}
        </section>
      )}
    </>
  );
}

export default App;