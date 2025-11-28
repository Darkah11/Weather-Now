"use client";
import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import todaySm from "@/public/bg-today-small.svg";
import todayLg from "@/public/bg-today-large.svg";
// import sunny from "@/public/icon-sunny.webp";
// import rain from "@/public/icon-rain.webp";
// import cloudy from "@/public/icon-partly-cloudy.webp";
// import snow from "@/public/icon-snow.webp";
// import storm from "@/public/icon-storm.webp";
// import drizzle from "@/public/icon-drizzle.webp";
// import fog from "@/public/icon-fog.webp";
import overcast from "@/public/icons/icon-cloud.webp";
import dropdown from "@/public/icon-dropdown.svg";
import WeatherIcon from "./WeatherIcon";

export default function Weather({
  weatherData,
  country,
  location,
  dailyData,
  hourlyData,
}) {
  const times = hourlyData.hourly.time;
  const temps = hourlyData.hourly.temperature_2m;
  const code = hourlyData.hourly.weather_code;

  const allDays = useMemo(() => {
    const days = new Set(times.map((t) => t.split("T")[0]));
    return Array.from(days);
  }, [times]);

  const [selectedDay, setSelectedDay] = useState(allDays[0]);

  const hourly = useMemo(() => {
    return times
      .map((t, i) => ({
        time: t,
        temperature: temps[i],
        code: code[i],
      }))
      .filter((entry) => entry.time.startsWith(selectedDay));
  }, [selectedDay, times, temps, code]);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");

  function formatTo12Hour(isoTime) {
    const hour = parseInt(isoTime.slice(11, 13), 10);

    if (hour === 0) return "12 AM";
    if (hour === 12) return "12 PM";
    if (hour < 12) return `${hour} AM`;
    return `${hour - 12} PM`;
  }

  function formatDate(dateString) {
    // Ensure the input is a valid Date object, handling potential string inputs
    const date = new Date(dateString);

    // Use Intl.DateTimeFormat options to get the desired parts and format
    const options = {
      weekday: "long", // "Tuesday"
      month: "short", // "Aug"
      day: "numeric", // "5" (no leading zero for single digits)
      year: "numeric", // "2025"
    };

    // The 'en-US' locale naturally produces the desired order and separators
    return date.toLocaleDateString("en-US", options);
  }
  useEffect(() => {
    const today = new Date();

    // const dayIndex = today.getDay();
    // const adjustedIndex = (dayIndex + 6) % 7;

    // Use the adjusted index to find the corresponding day name
    // setActiveDay(days[adjustedIndex]);
    setDate(formatDate(today));
  }, []);

  return (
    <div className=" max-w-[420px] mx-auto md:max-w-none lg:flex lg:gap-x-10 ">
      <div className="lg:w-[70%] lg:flex lg:flex-col lg:justify-between">
        <div className=" relative ">
          <Image
            src={todaySm}
            alt="weather background"
            className=" w-full md:hidden"
          />
          <Image
            src={todayLg}
            alt="weather background"
            className=" hidden md:block w-full"
          />
          <div className=" flex flex-col md:flex-row md:justify-between justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto md:px-8">
            <div className=" text-center">
              <p className=" text-[28px] font-bold">
                {/* {location}, {country} */}
              </p>
              <p className=" text-lg font-medium text-neutral-20">{date}</p>
            </div>
            <div className=" flex items-center justify-center mt-3">
              {/* <Image src={sunny} alt="sunny icon" className=" w-32 h-32" /> */}
              <WeatherIcon code={weatherData.current.weather_code} size={80} />
              <p className=" text-8xl font-semibold italic">
                {weatherData.current.temperature_2m.toFixed()}°
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          <div className="  bg-neutral-80 px-3 py-4  border rounded-lg border-neutral-60">
            <p className=" font-medium text-lg text-neutral-20">Feels Like</p>
            <p className=" text-3xl mt-3">
              {weatherData.current.apparent_temperature}°
            </p>
          </div>
          <div className=" bg-neutral-80 px-3 py-4  border rounded-lg border-neutral-60">
            <p className=" font-medium text-lg text-neutral-20">Humidity</p>
            <p className=" text-3xl mt-3">
              {weatherData.current.relative_humidity_2m}%
            </p>
          </div>
          <div className=" bg-neutral-80 px-3 py-4  border rounded-lg border-neutral-60">
            <p className=" font-medium text-lg text-neutral-20">Wind</p>
            <p className=" text-3xl mt-3">
              {weatherData.current.wind_speed_10m}{" "}
              {weatherData.current_units.wind_speed_10m}
            </p>
          </div>
          <div className=" bg-neutral-80 px-3 py-4  border rounded-lg border-neutral-60">
            <p className=" font-medium text-lg text-neutral-20">
              Precipitation
            </p>
            <p className=" text-3xl mt-3">
              {weatherData.current.precipitation}{" "}
              {weatherData.current_units.precipitation}
            </p>
          </div>
        </div>
        <div className=" py-10 lg:py-0">
          <h3 className=" text-xl font-semibold">Daily forecast</h3>
          <div className=" grid grid-cols-3 md:grid-cols-7 gap-3 mt-5">
            {dailyData &&
              dailyData.daily.time.map((day, index) => (
                <div
                  key={index}
                  className="  flex flex-col gap-y-4 items-center py-3 px-2 bg-neutral-80 border rounded-lg border-neutral-60"
                >
                  <p className=" font-medium text-lg">
                    {new Date(day).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </p>
                  <WeatherIcon
                    code={dailyData.daily.weather_code[index]}
                    size={60}
                  />
                  <div className=" w-full flex items-center justify-between">
                    <p className=" font-medium">
                      {dailyData.daily.temperature_2m_max[index].toFixed()}°
                    </p>
                    <p className=" font-medium">
                      {dailyData.daily.temperature_2m_min[index].toFixed()}°
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className=" bg-neutral-80 px-3 py-7 rounded-xl lg:w-[35%] h-[1000px] lg:h-[700px] flex flex-col">
        <div className=" flex items-center justify-between">
          <h3 className=" text-xl font-semibold">Hourly forecast</h3>
          <div className=" relative">
            <div className=" relative">
              <button
                onClick={() => setOpen(!open)}
                className=" capitalize w-36 bg-neutral-60 py-2 rounded-lg text-left px-4"
              >
                {new Date(selectedDay).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
                {/* {formatDate(selectedDay, {weekday})} */}
              </button>
              <Image
                className="absolute top-0 bottom-0 my-auto right-4"
                src={dropdown}
                alt="dropdown icon"
              />
            </div>
            <ul
              className={` ${
                open ? "block" : "hidden"
              } w-[160px] bg-neutral-80 py-1 px-2 border border-neutral-60 absolute z-50 rounded-lg top-[45px] right-0`}
            >
              {allDays.map((day, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setSelectedDay(allDays[index]);
                      setOpen(false);
                    }}
                    className={` px-2 hover:bg-neutral-60 capitalize flex items-center justify-between rounded-md py-[5px] w-full text-left `}
                  >
                    {new Date(day).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" mt-4 flex flex-col gap-[15px] flex-1 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
          {hourly.map((hour, index) => (
            <div key={index} className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 py-[8px] rounded-md">
              <div className=" flex items-center gap-3">
                <WeatherIcon
                  code={hour.code}
                  size={40}
                />

                <p className=" text-xl font-medium">
                  {formatTo12Hour(hour.time)}
                </p>
              </div>
              <p className=" font-medium">{hour.temperature.toFixed()}°</p>
            </div>
          ))}

          {/* <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
            <div className=" flex items-center gap-3">
              <Image src={cloudy} alt="overcast icon" className=" w-10 h-10" />
              <p className=" text-xl font-medium">4 PM</p>
            </div>
            <p className=" font-medium">75°</p>
          </div>
          <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
            <div className=" flex items-center gap-3">
              <Image src={sunny} alt="overcast icon" className=" w-10 h-10" />
              <p className=" text-xl font-medium">5 PM</p>
            </div>
            <p className=" font-medium">75°</p>
          </div>
          <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
            <div className=" flex items-center gap-3">
              <Image
                src={overcast}
                alt="overcast icon"
                className=" w-10 h-10"
              />
              <p className=" text-xl font-medium">6 PM</p>
            </div>
            <p className=" font-medium">75°</p>
          </div>
          <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
            <div className=" flex items-center gap-3">
              <Image src={snow} alt="overcast icon" className=" w-10 h-10" />
              <p className=" text-xl font-medium">7 PM</p>
            </div>
            <p className=" font-medium">75°</p>
          </div>
          <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
            <div className=" flex items-center gap-3">
              <Image src={fog} alt="overcast icon" className=" w-10 h-10" />
              <p className=" text-xl font-medium">8 PM</p>
            </div>
            <p className=" font-medium">75°</p>
          </div>
          <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
            <div className=" flex items-center gap-3">
              <Image src={snow} alt="overcast icon" className=" w-10 h-10" />
              <p className=" text-xl font-medium">9 PM</p>
            </div>
            <p className=" font-medium">75°</p>
          </div>
          <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
            <div className=" flex items-center gap-3">
              <Image
                src={overcast}
                alt="overcast icon"
                className=" w-10 h-10"
              />
              <p className=" text-xl font-medium">10 PM</p>
            </div>
            <p className=" font-medium">75°</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
