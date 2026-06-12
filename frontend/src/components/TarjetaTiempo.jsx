function TarjetaTiempo({dia}){
    return (
        <article className="tarjeta-tiempo">
            <h4>{new Date(dia.fecha).toLocaleDateString('es-ES')}</h4>

            <p>Temperatura máxima: {dia.temperaturaMaxima} ºC</p>
            <p>Temperatura mínima: {dia.temperaturaMinima} ºC</p>
            <p>Estado del cielo: {dia.estadoCielo}</p>
            <p>Probabilidad de lluvia: {dia.probPrecipitacion}%</p>
            <p>Viento: {dia.vientoDireccion} - {dia.vientoVelocidad} km/h</p>
        </article>
    );
}
export default TarjetaTiempo;