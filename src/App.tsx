import { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

function App() {
  const [cityName, setCityName] = useState<string>('')
  const [dataApi, setDataApi] = useState<null>(null)

  async function handleSearch() {
    
    if (!cityName) {
      alert("Digite o nome de uma cidade!");
      return;
    }

    const apiKey = '0784417855c762f722c58fce835553cd'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`

    const response = await fetch(apiUrl)
    const data = await response.json()

    setDataApi(data)
    console.log(data)
  }



  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex items-center justify-center flex-col border m-5 p-5 bg-white/20">
        <header className="flex items-center justify-center w-full relative">
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
              className="flex items-center justify-center border-1 w-10 h-11 rounded-sm cursor-pointer transition-transform duration-500 hover:scale-97"
              onClick={() => handleSearch()}
            >
              <FaSearch className="text-gray-800" />
            </button>
          </div>
        </header>
      </div>
    </div>
  )
}

export default App
