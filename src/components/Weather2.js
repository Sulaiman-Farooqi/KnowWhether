import React, { useState, useEffect } from 'react'
import './style.css'

const Weather2 = ({ temp,
  humidity,
  pressure,
  name,
  speed,
  weathermood,
  country,
  sunset }) => {


  const [setState, setMyState] = useState("")

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds": setMyState("wi-day-cloudy")


          break;
        case "Haze": setMyState("wi-smoke")


          break;
        case "Clear": setMyState("wi-day-sunny")


          break;
        default:
          setMyState("wi-day-sunny")
          break;
      }

    }
  }, [weathermood])

  // const {

  // } = setdata

  let sec = sunset;
  let date = new Date(sec * 1000);
  let str = `${date.getHours()}:${date.getMinutes()}}`
  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${setState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span> {temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition"></div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date">  </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={`wi ${setState}`}></i>
              </p>
              <p className="extra-info-leftside">
                {str} <br />
                sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={`wi ${setState}`}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>


    </div>
  )
}

export default Weather2