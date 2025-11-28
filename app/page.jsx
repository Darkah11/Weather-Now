import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/Search";
import Weather from "./components/Weather";
import {
  dailyForecast,
  fetchWeather,
  geocodeCityX,
  hourlyForecast,
} from "./lib/weather";
// import { Suspense } from "react";

export default async function Home({ searchParams }) {
  const unit = searchParams.unit ?? "metric";
  const lat = searchParams.lat ?? 43.1561681;
  const lon = searchParams.lon ?? -75.8449946;
  // const { name, latitude, longitude, country } = await geocodeCity("Ber");
  const { city, country } = await geocodeCityX(lat, lon);
  const weatherData = await fetchWeather(lat, lon, unit);
  const hourlyData = await hourlyForecast(lat, lon, unit);
  const dailyData = await dailyForecast(lat, lon, unit);
  // console.log(hourlyData);

  return (
    <>
      <Header />
      <main className=" px-4 md:px-6 xl:px-28 max-w-[1440px] mx-auto">
        <h1 className=" text-center text-6xl py-5 font-bold leading-[1.2]">
          How&apos;s the sky looking today?
        </h1>
        <section className=" py-10">
          <Search />
          <div className=" mt-10">
              <Weather
                weatherData={weatherData}
                dailyData={dailyData}
                location={city}
                country={country}
                hourlyData={hourlyData}
              />
          </div>
        </section>
      </main>
    </>
  );
}
