import { FaTint } from "react-icons/fa";
import { WiStrongWind } from "react-icons/wi";
import { WiThermometer, WiThermometerExterior } from "react-icons/wi";
import { WiSunrise, WiSunset } from "react-icons/wi";

export type DadosType = {
    name: string;
    sys: {
        country: string,
        sunrise: number,
        sunset: number,
    }
    main: {
        temp: number;
        temp_max: number,
        temp_min: number,
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

function DadosClima({ name, main, weather, wind, sys }: DadosType) {
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-3 w-full px-2">
            <div className="flex flex-col lg:flex-row gap-3 w-full items-stretch justify-center">
                <div className="flex flex-col items-center justify-between gap-3 w-full lg:w-[40%] border rounded-2xl bg-white/20 p-4 h-full">
                    <img
                        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                        alt={weather[0].description}
                        className="w-24 h-24 object-contain"
                    />

                    <p className="text-lg font-bold text-center capitalize">
                        {weather[0].description}
                    </p>

                    <h2 className="font-sans text-5xl md:text-4xl font-semibold text-center">
                        {Math.round(main.temp)}°C
                    </h2>

                    <p className="text-lg font-bold text-center">
                        {name}, {sys.country}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 w-full lg:w-[60%] lg:gap-5 lg:pt-1 font-mono h-full">
                    <div className="flex items-center gap-3 border rounded-2xl p-3 bg-white/20 h-auto md:h-20">
                        <WiThermometer className="text-orange-400 text-3xl" />
                        <div>
                            <p className="font-medium">Temp. max:</p>
                            <p className="font-medium">{main.temp_max}°C</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 border rounded-2xl p-3 bg-white/20 h-auto md:h-20">
                        <WiThermometerExterior className="text-blue-400 text-3xl" />
                        <div>
                            <p className="font-medium">Temp. min:</p>
                            <p className="font-medium">{main.temp_min}°C</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 border rounded-2xl p-3 bg-white/20 h-auto md:h-20">
                        <div className="flex flex-col gap-2">
                            <p className="flex items-center gap-2 font-medium">
                                <WiSunrise className="text-yellow-400 text-3xl" />
                                Nascer do sol: {sunrise}
                            </p>
                            <p className="flex items-center gap-2 font-medium">
                                <WiSunset className="text-orange-500 text-3xl" />
                                Pôr do sol: {sunset}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 w-full">
                <div className="flex items-center justify-center gap-3 border p-4 rounded-2xl bg-white/20 w-full lg:w-[40%]">
                    <FaTint className="text-blue-500 text-5xl" />
                    <div className="text-center">
                        <p className="font-bold text-lg">{main.humidity}%</p>
                        <p className="font-semibold">Umidade</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 border p-4 rounded-2xl bg-white/20 w-full lg:w-[60%]">
                    <WiStrongWind className="text-gray-600 text-6xl" />
                    <div className="text-center">
                        <p className="font-bold text-lg">{wind.speed} KM/H</p>
                        <p className="font-semibold">Vel. do vento</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DadosClima