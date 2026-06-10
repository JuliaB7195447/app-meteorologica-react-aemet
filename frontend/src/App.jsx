import {useState} from 'react';

function App(){

  const [codigoMunicipio, setCodigoMunicipio] = useState('30016');

  const [datosTiempo, setDatosTiempo] = useState(null);

  //busca el tiempo del municipio llamando a backend
  const buscarTiempo = async (e) => {e.preventDefault();
    
  const respuesta = await fetch(`http://localhost:3000/api/tiempo/${codigoMunicipio}`);
  const datos = await respuesta.json();
  
  setDatosTiempo(datos);
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

      {datosTiempo && !datosTiempo.success && (
      <p>{datosTiempo.error}</p>
)}

      {datosTiempo && datosTiempo.success && (
        <section>
          <h2>{datosTiempo.municipio}</h2>
          <p>Provincia: {datosTiempo.provincia}</p>

          <p>
            Temperatura máxima: {datosTiempo.prediccion[0].temperaturaMaxima} ºC
          </p>
          <p>
            Temperatura minima: {datosTiempo.prediccion[0].temperaturaMinima} ºC
          </p>
          <p>
            Estado del cielo: {datosTiempo.prediccion[0].estadoCielo}
          </p>
        </section>
      )}
    </>
  );
}
export default App;