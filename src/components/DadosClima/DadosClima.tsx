import { FaTint } from "react-icons/fa";
import { WiStrongWind } from "react-icons/wi";

export type DadosType = {
    name: string;
    main: {
        temp: number;
        humidity: number;
        pressure: number;
    };
    wind: {
        speed: number;
    }
    weather: {
        description: string;
        icon: string;
    }[];
    cod: number;
};

function DadosClima({ name, main, weather, wind }: DadosType) {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt={weather[0].description}
                className="text-9xl"
            />
            <h2 className="font-mono">{Math.round(main.temp)}°C</h2>
            <p>{name}</p>
            <div className="flex ">
                <div className="flex">
                    <FaTint className="text-blue-500 text-5xl" />
                    <div>
                        <p>{main.humidity}%</p>
                        <p>Umidade</p>
                    </div>
                </div>
                <div className="flex">
                    <WiStrongWind className="text-gray-600 text-6xl" />
                    <div>
                        <p>{wind.speed}KM/H</p>
                        <p>Vel. do vento</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DadosClima