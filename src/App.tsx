import { useState } from "react"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"

function App() {
  const [cityName, setCityName] = useState<string>('')

  const apiKey = '0784417855c762f722c58fce835553cd'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`


  return (
    <div className="flex items-center justify-center flex-col m-10 p-5 border">
      <header className="flex items-center justify-center w-full relative">
                  <div className="flex items-center justify-center gap-3 w-96">
                      <div className="flex items-center gap-2 w-80 h-11 border rounded-sm pl-2 ">
                          <span className=""><FaMapMarkerAlt className="text-lg text-gray-800" /></span>
                          <input
                              type="text"
                              placeholder="Buscar cidade."
                              className="w-full borde-none rounded-sm focus:outline-none focus:ring-0" />
                      </div>
                      <button className="flex items-center justify-center border-1 w-10 h-11 rounded-sm cursor-pointer transition-transform duration-500 hover:scale-97"><FaSearch className="text-gray-800" /></button>
                  </div>
              </header>
    </div>
  )
}

export default App
