import { useState, useEffect } from "react";

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("/api/weather?city=Malang")
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div>
      <h1>Cuaca Saat Ini</h1>
      {weather ? (
        <div>
          <p>Kota: {weather.name}</p>
          <p>Suhu: {weather.main.temp}°C</p>
          <p>Cuaca: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherPage;
