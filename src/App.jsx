import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {
  return (
    <ClimaProvider>
      <header className="py-4 bg-white mb-4">
        <h1 className="text-center font-bold text-2xl">Consulta Climática</h1>
      </header>
        {/* <h1>Buscador de Clima</h1> */}
      <AppClima />
    </ClimaProvider>
  );
}

export default App;
