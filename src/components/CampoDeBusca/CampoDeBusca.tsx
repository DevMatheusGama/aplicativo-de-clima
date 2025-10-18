import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa"; 

function CampoDeBusca() {
    return (
        <header className="flex items-center justify-center w-full relative">
            <div className="flex items-center justify-center gap-3 w-96">
                <span className="absolute top-3.5 left-25"><FaMapMarkerAlt className="text-lg text-gray-800" /></span>
                <input type="text" placeholder="Buscar cidade." className="border-1 px-7 w-80 h-11 rounded-sm focus:outline-none focus:ring-0"/>
                <button className="flex items-center justify-center border-1 w-10 h-11 rounded-sm cursor-pointer transition-transform duration-500 hover:scale-97"><FaSearch className="text-gray-800" /></button>
            </div>
        </header>
    )
}

export default CampoDeBusca