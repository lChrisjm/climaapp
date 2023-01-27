import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Loading from "./Loading";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado, loading,noResultado } = useClima();

  return (
    <>
      <main className="flex grow flex-col items-center gap-5 px-4 h-fit md:max-xl:flex-row md:max-xl:items-start md:max-xl:justify-center md:max-xl:h-30 md:max-xl:grow-0 ">
        <Formulario />

        {
        loading ? <Loading /> :
        resultado?.name ? <Resultado /> :
        noResultado ?? <p>{noResultado}</p> 
        }
      </main>
    </>
  );
};
export default AppClima;
