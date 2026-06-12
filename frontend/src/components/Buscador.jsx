function Buscador({codigoMunicipio, setCodigoMunicipio, buscarTiempo}) {
    return (
        <form onSubmit={buscarTiempo}>
            <label htmlFor="codigo">Código de municipio:</label>

            <input type="text" id="codigo" value={codigoMunicipio} onChange={(e) => setCodigoMunicipio(e.target.value)}/>

            <button type="submit">Buscar</button>
        </form>
    );
}
export default Buscador;