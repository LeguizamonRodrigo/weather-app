import Cold from "./Assets/Cold.jpg";
import hot from "./Assets/hot.jpg";
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from "react-icons/wi";
import Descriptions from "./Components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import React from "react";
function App() {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [bg, setBg] = useState(hot);
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(WiDaySunny);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city);

      if (data.temp >= 20) {
        setBg(hot);
      } else {
        setBg(Cold);
      }

      if (data.temp >= 25) {
        setIcon(<WiDaySunny size={90} />);
      } else if (data.temp >= 20) {
        setIcon(<WiCloudy size={90} />);
      } else if (data.temp >= 10) {
        setIcon(<WiRain size={90} />);
      } else {
        setIcon(<WiSnow size={90} />);
      }
      setTemperature(data.temp);
      setWeather(data);

      //dynamic bg
    };
    fetchWeatherData();
  }, [city]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    // Style in line used because its dynamic background
    <div
      className="App  h-screen w-full bg-center bg-cover  "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay w-full h-full backdrop-brightness-90">
        {weather && (
          <div className="container max-w-4xl m-auto h-full flex items-center justify-between flex-col p-4">
            <div className="section_imputs w-full p-4 rounded-lg bg-black bg-opacity-80 flex items-center justify-between">
              <input
                onKeyDown={handleKeyDown}
                className=" border rounded-md bg-transparent p-1 text-xl text-white  "
                type="text"
                name="city"
                placeholder="Enter a city name"
              ></input>
              <span className="bg-white rounded-md py-1 px-3 text-xl font-semibold hover:cursor-pointer hover:bg-opacity-75">
                {" "}
                C°
              </span>
            </div>
            <div className="section_temperature w-full h-1/5 p-4 flex flex-col justify-between rounded-lg bg-black bg-opacity-80 text-white ">
              <div className="icon flex items-center justify-between  text-2xl font-semibold capitalize ">
                {/* se pueden reducir clases */}
                <div>
                  <h3 className="text-xl  font-medium capitalize">
                    {`${weather.name} , ${weather.country}`}
                  </h3>
                  {React.cloneElement(icon)}
                  <h3 className="text-xl pl-2">{weather.description}</h3>
                </div>
                <div className="temperature text-4xl font-semibold  ">
                  <h1>
                    {temperature !== null && `${temperature.toFixed()}°C`}
                  </h1>
                </div>
              </div>
            </div>
            {/* botton description */}
            <Descriptions weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
