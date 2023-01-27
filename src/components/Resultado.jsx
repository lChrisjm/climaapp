import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;

  //Grados Kelvin
  const kelvin = 273.15;

  return (
    <div className="md:w-1/3 md:min-h-full shadow-lg h-auto flex flex-col bg-green-50 w-full rounded-md text-center ring-4 ring-green-400 px-6 py-5">
      <h2 className="font-bold text-xl">{name}:</h2>
      <p className="text-xl mt-3">
        {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
      </p>
      <div className="flex row justify-center gap-6 mt-4">
        <p className="flex flex-col font-semibold">
          Mínima: <span className="text-md font-thin">{parseInt(main.temp_min - kelvin)} <span className="">&#x2103;</span></span>
        </p>
        <p className="flex flex-col font-semibold">
          Máxima:
          <span className="text-md font-thin">{parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></span>
        </p>
      </div>
    </div>
  );
};
export default Resultado;
