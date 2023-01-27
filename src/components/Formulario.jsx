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
      setTimeout(() => {
        setAlerta("");
      }, 3000);
      return;
    }

    consultarClima(busqueda);
  };

  return (
    <div className="md:w-1/3 bg-green-50 w-full rounded-md text-center shadow-lg h-auto px-6 py-5">
      {alerta && (
        <p className="block bg-red-400 text-sm text-red-900 py-1 rounded-md">
          {alerta}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
        <div className="flex flex-col">
          <div className="flex flex-col text-left">
            <label htmlFor="ciudad" className="text-left font-bold ">
              Ciudad
            </label>
            <input
              onChange={datosBusqueda}
              type="text"
              htmlFor="ciudad"
              name="ciudad"
              value={ciudad}
              className="py-1 px-2 border-gray-500 bg-gray300 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="pais" className="text-left font-bold my-2 ">
              País
            </label>
            <select
              className="py-1 px-2 border-gray-500 bg-gray300 border-2 rounded-md"
              name="pais"
              id="pais"
              value={pais}
              onChange={datosBusqueda}
            >
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
        </div>

        <input
          type="submit"
          className="bg-green-500  self-end cursor-pointer w-full py-2 rounded-xl border-black border-4 text-white font-semibold text-xl "
          value="Consultar"
        />
      </form>
    </div>
  );
};
export default Formulario;



