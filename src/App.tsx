import { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import DadosClima, { type DadosType } from "./components/DadosClima/DadosClima";

function App() {
  const [cityName, setCityName] = useState<string>('')
  const [dataApi, setDataApi] = useState<DadosType | null>(null)
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  async function handleSearch() {
    if (!cityName) {
      alert("Digite o nome de uma cidade!");
      return;
    }

    const apiKey = '0784417855c762f722c58fce835553cd'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`

    try {
      setLoading(true)

      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)

      if (data.cod === 200) {
        setDataApi(data);
        setError("");
      } else {
        setDataApi(null);
        setError("Cidade não encontrada 😢");
      }

    } catch (error) {
      setDataApi(null);
      setError("Erro na requisição. Tente novamente.");
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex items-center justify-center flex-col rounded-lg m-5 p-5 bg-black/15">
        <header className="flex items-center justify-center w-full ">
          <div className="flex items-center justify-center gap-3 w-96">
            <div className="flex items-center gap-2 w-80 h-11 border rounded-sm pl-2 ">
              <span className=""><FaMapMarkerAlt className="text-lg text-gray-800" /></span>
              <input
                type="text"
                placeholder="Buscar cidade."
                className="w-full borde-none rounded-sm focus:outline-none focus:ring-0"
                onChange={(event) => setCityName(event.target.value)}
              />

            </div>
            <button
              className={`flex items-center justify-center border-1 w-10 h-11 rounded-sm cursor-pointer transition-transform duration-500 hover:scale-97 ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={() => handleSearch()}
              disabled={loading}
            >
              <FaSearch className="text-gray-800" />
            </button>
          </div>
        </header>

        {loading ? (
          <div className="flex flex-col items-center mt-3">
            <div className="w-10 h-10 border-4 border-white/40 border-t-white rounded-full animate-spin"></div>
            <p className="mt-2 text-white font-semibold">Buscando...</p>
          </div>
        ) : error ? (
          <div className="mt-3 flex items-center gap-2 bg-red-100 text-red-700 px-3 py-2 rounded-md animate-pulse">
            <span className="font-bold">⚠️</span>
            <p className="font-medium">{error}</p>
          </div>
        ) : null}

        {dataApi && <DadosClima {...dataApi} />}
      </div >
    </div >
  )
}

export default App
