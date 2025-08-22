// import React, { useState } from 'react'
// import axios from 'axios'
// import { useSearchParams } from 'react-router-dom'

// const Weather = () => {
//     const[city,setcity] = useState("")
//     const[weather,setweather]=useState("")
//     const[temperature,settemperature]=useState("")
//     const[desc,setdesc]=useState("")

//     const handlecity = ((evt) =>{
//         setcity(evt.target.value)
//     })

//     const getweather = (() => {
//         let weatherdata =
//          axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=868ce3ba3f4e7196ba9ab9efe63bf861`)
//         weatherdata.then((success) =>{
//             console.log(success.data)
//             setweather(success.data.weather[0].main)
//             settemperature(success.data.main.temp)
//             setdesc(success.data.weather[0].description)
//         })
//     })

//   return (
//     <div className='my-3 space-y-3'>
//         <p className='text-xl text-green-600 font-semibold'>I check the current weather in your city :)</p>
//         <input className='border border-black w-full md:w-1/2 p-2 mx-auto block rounded-md' 
//         onChange={handlecity}
//         type="text" placeholder='Current City Weather...'/>
//         <button onClick={getweather}
//         className='px-2 py-1 m-2 bg-purple-400 rounded-md mx-auto block'>Check</button>
//         <div className='flex flex-wrap justify-evenly items-center'>
//             <p><b>Weather : </b>{weather}</p>
//             <p><b>Temperature : </b>{temperature}</p>
//             <p><b>Description : </b>{desc}</p>
//         </div>
//     </div>
//   )
// }

// export default Weather






import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");
    const [loading, setloading] = useState(false)

    const handleCity = (evt) => {
        setCity(evt.target.value);
    };

    const getWeather = async () => {
        if (!city.trim()) return;

        setloading(true)
        setWeather("")
        setDesc("")

        try {
            let response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=868ce3ba3f4e7196ba9ab9efe63bf861&units=metric`
            );

            const data = response.data;
            setWeather(data.weather[0].main);
            setTemperature(data.main.temp);
            setDesc(data.weather[0].description);
            setIcon(data.weather[0].icon);
        } catch (error) {
            setWeather("");
            setTemperature("");
            setDesc("City not found");
            setIcon("");
        } finally{
            setloading(false)
        }
    };

    return (
        <div>
             <p className='text-xl text-purple-600 font-semibold mt-2'>I check the current weather in your city :)</p>
            <div className="p-6 flex flex-col items-center">
                <h1 className="md:text-2xl font-semibold text-purple-600 mb-4">
                    Check the Weather in Your City ☁️
                </h1>

                {/* Input + Button */}
                <div className="flex gap-2 mb-4">
                    <input
                        className="border border-gray-400 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                        onChange={handleCity}
                        type="text"
                        placeholder="Enter city..."
                    />
                    <button
                        onClick={getWeather}
                        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md"
                        disabled={loading}
                    >
                        {loading ? (<div className="w-5 h-5 bg-purple-500
                         hover:bg-purple-600 border border-t-2 rounded-full animate-spin"></div>) : ("Check")}
                    </button>
                </div>

                {/* Weather Info */}
                {weather && (
                    <div className="mt-4 p-4 border border-gray-200 rounded-lg shadow-md w-full max-w-sm text-center bg-gray-50">
                        {icon && (
                            <img
                                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                alt={desc}
                                className="mx-auto"
                            />
                        )}
                        <h2 className="text-xl font-bold">{city}</h2>
                        <p className="text-3xl font-semibold">{Math.round(temperature)}°C</p>
                        <p className="capitalize text-gray-700">{desc}</p>
                        <p className="text-sm text-gray-500">Condition: {weather}</p>
                    </div>
                )}

                {/* Error State */}
                {!weather && desc === "City not found" && (
                    <p className="text-red-500 mt-3">❌ City not found</p>
                )}
            </div>
        </div>
    );
};

export default Weather;




// import React, { useState } from "react";
// import axios from "axios";

// const Weather = () => {
//     const [city, setCity] = useState("");
//     const [weather, setWeather] = useState("");
//     const [temperature, setTemperature] = useState("");
//     const [desc, setDesc] = useState("");
//     const [icon, setIcon] = useState("");

//     const handleCity = (evt) => {
//         setCity(evt.target.value);
//     };

//     const getWeather = async () => {
//         if (!city.trim()) return;

//         try {
//             let response = await axios.get(
//                 `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=868ce3ba3f4e7196ba9ab9efe63bf861&units=metric`
//             );

//             const data = response.data;
//             console.log(data);

//             setWeather(data.weather[0].main);
//             setTemperature(data.main.temp);
//             setDesc(data.weather[0].description);
//             setIcon(data.weather[0].icon); // icon from API
//         } catch (error) {
//             console.error(error);
//             setWeather("");
//             setTemperature("");
//             setDesc("City not found");
//             setIcon("");
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-500 p-6">
//             <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
//                 <h1 className="text-2xl font-bold text-center mb-6">
//                     🌍 Weather App
//                 </h1>

//                 {/* Input + Button */}
//                 <div className="flex gap-2 mb-6">
//                     <input
//                         className="border border-gray-300 text-black w-full px-3 py-2 rounded-md focus:outline-none"
//                         onChange={handleCity}
//                         type="text"
//                         placeholder="Enter city name..."
//                     />
//                     <button
//                         onClick={getWeather}
//                         className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md text-white font-medium"
//                     >
//                         Check
//                     </button>
//                 </div>

//                 {/* Weather Details */}
//                 {weather && (
//                     <div className="text-center space-y-4">
//                         {/* Weather Icon */}
//                         {icon && (
//                             <img
//                                 src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
//                                 alt={desc}
//                                 className="mx-auto"
//                             />
//                         )}

//                         <p className="text-4xl font-bold">
//                             {Math.round(temperature)}°C
//                         </p>
//                         <p className="text-lg capitalize">{desc}</p>

//                         <div className="flex justify-center gap-4 mt-4">
//                             <div className="bg-white/10 px-4 py-2 rounded-lg">
//                                 <b>Weather:</b> {weather}
//                             </div>
//                             <div className="bg-white/10 px-4 py-2 rounded-lg">
//                                 <b>City:</b> {city}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Error / Empty State */}
//                 {!weather && desc === "City not found" && (
//                     <p className="text-center text-red-300 mt-4">❌ City not found</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Weather;