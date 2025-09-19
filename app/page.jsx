import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/Search";
import Weather from "./components/Weather";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" px-4">
        <h1 className=" text-center text-6xl py-5 font-bold leading-[1.2]">
          How's the sky looking today?
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
