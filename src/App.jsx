import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {
  return (
    <ClimaProvider>
      <header className="py-4 bg-green-400 text-white border-b-8 border-green-600 mb-4">
        <h1 className="text-center font-bold text-3xl">Consulta Climática</h1>
      </header>
      <AppClima />
    </ClimaProvider>
  );
}

export default App;
