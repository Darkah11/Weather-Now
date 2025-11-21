import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { dailyForecast, fetchWeather, geocodeCity, hourlyForecast } from "./lib/weather";

export default async function Home() {
  const {name, latitude, longitude, country} = await geocodeCity('Akungba')
  const weatherData = await fetchWeather(52.52, 13.41)
  const hourlyData = await hourlyForecast(52.52, 13.41)
  const dailyData = await dailyForecast(52.52, 13.41)
  console.log(name, latitude, longitude, country);
  console.log(weatherData, hourlyData, dailyData);
  
  
  return (
    <>
      <Header />
      <main className=" px-4 md:px-6 xl:px-28">
        <h1 className=" text-center text-6xl py-5 font-bold leading-[1.2]">
          How&apos;s the sky looking today?
        </h1>
        <section className=" py-10">
          <Search />
          <div className=" mt-10">
            <Weather />
          </div>
        </section>
        {/* Units Switch to Imperial/Metric Temperature Celsius (°C) Fahrenheit (°F)
        Wind Speed km/h mph Precipitation Millimeters (mm) Inches (in) Search
        for a city, e.g., New York Search Feels like */}
        {/* <!-- Insert temperature here --> */}
        {/* Humidity */}
        {/* <!-- Insert humidity here --> */}
        {/* Wind */}
        {/* <!-- Insert wind here -->    */}
        {/* Precipitation */}
        {/* <!-- Insert precipitation here --> */}
        {/* Daily forecast */}
        {/* <!-- Insert daily forecast for the next 7 days here --> */}
        {/* Hourly forecast */}
        {/* <!-- Insert hourly forecast for the selected day here --> */}
      </main>
    </>
  );
}
