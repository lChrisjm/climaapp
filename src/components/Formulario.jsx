const Formulario = () => {
  return (
    <form action="">
      <div className="campo">
        <label htmlFor="ciudad">Ciudad</label>
        <input type="text" htmlFor="ciudad" name="ciudad" />
      </div>
      <div className="campo">
        <label htmlFor="pais">País</label>
        <select name="pais" id="pais">
            <option value=""> Seleccione un País </option>
            <option value="US">Estados Unidos</option>
            <option value="DO">República Dominicana</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
        </select>
      </div>
    <input type="submit" value="Consultar Clima" />
    </form>
  );
};
export default Formulario;
