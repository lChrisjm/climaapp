import useClima from "../hooks/useClima"

const Resultado = () => {

    const { resultado } = useClima();

    console.log(resultado)
  return (
    <div>Resultado</div>
  )
}
export default Resultado