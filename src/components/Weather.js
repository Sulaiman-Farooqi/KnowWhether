import React, { useState, useEffect } from 'react'
import "./style.css";
import Weather2 from './Weather2';


const Weather = () => {
  const [inputData, setMyinputData] = useState("meerut")
  const [setData, setMydata] = useState({})

  const getWeatherInfo = async () => {
    let data = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=04acd9708c21ed3375371ecaff9f89cf`
    let myUrl = await fetch(data)
    let weatherInfoData = await myUrl.json()
    // console.log(weatherInfoData);

    const { temp, humidity, pressure } = weatherInfoData.main;
    const { main: weathermood } = weatherInfoData.weather[0];
    const { name } = weatherInfoData;
    const { speed } = weatherInfoData.wind
    const { country, sunset } = weatherInfoData.sys

    const myWeatherData = {
      temp,
      humidity,
      pressure,
      name,
      speed,
      weathermood,
      country,
      sunset

    }
    setMydata(myWeatherData);
  }

  useEffect(() => {
    getWeatherInfo();


  }, [])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={inputData}
            onChange={(e) => { setMyinputData(e.target.value) }}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weather2 {...setData} />

    </>
  );
};


export default Weather 