import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Loading from "./Loading";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado, loading,noResultado } = useClima();

  return (
    <>
      <main className="flex grow flex-col items-center gap-5 px-4 h-fit md:flex-row md:items-start md:justify-center md:h-30 md:grow-0 md: ">
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
