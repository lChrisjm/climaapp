import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;

  //Grados Kelvin
  const kelvin = 273.15;

  return (
    <div className="flex flex-col bg-green-50 w-full rounded-md text-center ring-4 ring-red-400 h-auto px-6 py-5">
      <h2 className="font-bold text-xl">{name}:</h2>
      <p className="text-xl mt-3">
        {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
      </p>
      <div className="flex row justify-center gap-6 mt-4">
        <p className="flex flex-col">
          Mínima: <span>{parseInt(main.temp_min - kelvin)} &#x2103;</span>
        </p>
        <p className="flex flex-col">
          Máxima:
          <span>{parseInt(main.temp_max - kelvin)} &#x2103;</span>
        </p>
      </div>
    </div>
  );
};
export default Resultado;
