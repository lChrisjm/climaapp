import useClima from "../hooks/useClima";
import { useState } from "react";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");

  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }

    setAlerta('')
    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            onChange={datosBusqueda}
            type="text"
            htmlFor="ciudad"
            name="ciudad"
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select name="pais" id="pais" value={pais} onChange={datosBusqueda}>
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
    </div>
  );
};
export default Formulario;
