import {useState} from 'react';
import './App.css';
import Buscador from './components/Buscador';
import TarjetaTiempo from './components/TarjetaTiempo';

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

  //comprobar que codigo solo tiene números
  if(!/^\d+$/.test(codigoMunicipio)) {
    setError('Introduce un código de municipio válido');
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

      <Buscador
        codigoMunicipio={codigoMunicipio}
        setCodigoMunicipio={setCodigoMunicipio}
        buscarTiempo={buscarTiempo}
      />

      {cargando && <p>Cargando datos...</p>}

      {error && <p>{error}</p>}

      {datosTiempo && (
        <section className="resultados">
          <h2>
            {datosTiempo.municipio} ({datosTiempo.provincia})
          </h2>

          <h3>Predicción semanal</h3>

          {datosTiempo.prediccion.map((dia, index) => (
            <TarjetaTiempo
              key={index}
              dia={dia}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default App;