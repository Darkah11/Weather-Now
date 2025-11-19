"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import todaySm from "@/public/bg-today-small.svg";
import todayLg from "@/public/bg-today-large.svg";
import sunny from "@/public/icon-sunny.webp";
import rain from "@/public/icon-rain.webp";
import cloudy from "@/public/icon-partly-cloudy.webp";
import snow from "@/public/icon-snow.webp";
import storm from "@/public/icon-storm.webp";
import drizzle from "@/public/icon-drizzle.webp";
import fog from "@/public/icon-fog.webp";
import overcast from "@/public/icon-overcast.webp";
import dropdown from "@/public/icon-dropdown.svg";

export default function Weather() {
  const [open, setOpen] = useState(false);
  const [activeDay, setActiveDay] = useState("");
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  useEffect(() => {
    // Create an array of day names

    // Get today's date
    const today = new Date();

    // Get the numeric day of the week (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = today.getDay();
    const adjustedIndex = (dayIndex + 6) % 7;

    // Use the adjusted index to find the corresponding day name
    setActiveDay(days[adjustedIndex]);
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
              <p className=" text-[28px] font-bold">Berlin, Germany</p>
              <p className=" text-lg font-medium text-neutral-20">
                Tuesday, Aug 5, 2025
              </p>
            </div>
            <div className=" flex items-center justify-center mt-3">
              <Image src={sunny} alt="sunny icon" className=" w-32 h-32" />
              <p className=" text-8xl font-semibold italic">68°</p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          <div className="  bg-neutral-80 px-3 py-4  border rounded-lg border-neutral-60">
            <p className=" font-medium text-lg text-neutral-20">Feels Like</p>
            <p className=" text-3xl mt-3">64°</p>
          </div>
          <div className=" bg-neutral-80 px-3 py-4  border rounded-lg border-neutral-60">
            <p className=" font-medium text-lg text-neutral-20">Humidity</p>
            <p className=" text-3xl mt-3">46%</p>
          </div>
          <div className=" bg-neutral-80 px-3 py-4  border rounded-lg border-neutral-60">
            <p className=" font-medium text-lg text-neutral-20">Wind</p>
            <p className=" text-3xl mt-3">9 mph</p>
          </div>
          <div className=" bg-neutral-80 px-3 py-4  border rounded-lg border-neutral-60">
            <p className=" font-medium text-lg text-neutral-20">
              Precipitation
            </p>
            <p className=" text-3xl mt-3">0 in</p>
          </div>
        </div>
        <div className=" py-10 lg:py-0">
          <h3 className=" text-xl font-semibold">Daily forecast</h3>
          <div className=" grid grid-cols-3 md:grid-cols-7 gap-3 mt-5">
            <div className="  flex flex-col gap-y-4 items-center py-3 px-2 bg-neutral-80 border rounded-lg border-neutral-60">
              <p className=" font-medium text-lg">Tue</p>
              <Image src={rain} className=" w-16 h-16" alt="rain icon" />
              <div className=" w-full flex items-center justify-between">
                <p className=" font-medium">68°</p>
                <p className=" font-medium">57°</p>
              </div>
            </div>
            <div className="  flex flex-col gap-y-4 items-center py-3 px-2 bg-neutral-80 border rounded-lg border-neutral-60">
              <p className=" font-medium text-lg">Wed</p>
              <Image src={drizzle} className=" w-16 h-16" alt="rain icon" />
              <div className=" w-full flex items-center justify-between">
                <p className=" font-medium">70°</p>
                <p className=" font-medium">59°</p>
              </div>
            </div>
            <div className="  flex flex-col gap-y-4 items-center py-3 px-2 bg-neutral-80 border rounded-lg border-neutral-60">
              <p className=" font-medium text-lg">Thu</p>
              <Image src={sunny} className=" w-16 h-16" alt="rain icon" />
              <div className=" w-full flex items-center justify-between">
                <p className=" font-medium">75°</p>
                <p className=" font-medium">57°</p>
              </div>
            </div>
            <div className="  flex flex-col gap-y-4 items-center py-3 px-2 bg-neutral-80 border rounded-lg border-neutral-60">
              <p className=" font-medium text-lg">Fri</p>
              <Image src={cloudy} className=" w-16 h-16" alt="rain icon" />
              <div className=" w-full flex items-center justify-between">
                <p className=" font-medium">77°</p>
                <p className=" font-medium">55°</p>
              </div>
            </div>
            <div className="  flex flex-col gap-y-4 items-center py-3 px-2 bg-neutral-80 border rounded-lg border-neutral-60">
              <p className=" font-medium text-lg">Sat</p>
              <Image src={storm} className=" w-16 h-16" alt="rain icon" />
              <div className=" w-full flex items-center justify-between">
                <p className=" font-medium">70°</p>
                <p className=" font-medium">59°</p>
              </div>
            </div>
            <div className="  flex flex-col gap-y-4 items-center py-3 px-2 bg-neutral-80 border rounded-lg border-neutral-60">
              <p className=" font-medium text-lg">Sun</p>
              <Image src={snow} className=" w-16 h-16" alt="rain icon" />
              <div className=" w-full flex items-center justify-between">
                <p className=" font-medium">77°</p>
                <p className=" font-medium">61°</p>
              </div>
            </div>
            <div className="  flex flex-col gap-y-4 items-center py-3 px-2 bg-neutral-80 border rounded-lg border-neutral-60">
              <p className=" font-medium text-lg">Mon</p>
              <Image src={fog} className=" w-16 h-16" alt="rain icon" />
              <div className=" w-full flex items-center justify-between">
                <p className=" font-medium">75°</p>
                <p className=" font-medium">59°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-80 px-3 py-7 rounded-xl lg:w-[35%]">
        <div className=" flex items-center justify-between">
          <h3 className=" text-xl font-semibold">Hourly forecast</h3>
          <div className=" relative">
            <div className=" relative">
              <button
                onClick={() => setOpen(!open)}
                className=" capitalize w-36 bg-neutral-60 py-2 rounded-lg text-left px-4"
              >
                {activeDay}
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
              {days &&
                days.map((day, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setActiveDay(days[index]);
                        setOpen(false);
                      }}
                      className={` px-2 hover:bg-neutral-60 capitalize flex items-center justify-between rounded-md py-[5px] w-full text-left `}
                    >
                      {day}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className=" mt-4 flex flex-col gap-[15px]">
          <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
            <div className=" flex items-center gap-3">
              <Image
                src={overcast}
                alt="overcast icon"
                className=" w-10 h-10"
              />
              <p className=" text-xl font-medium">3 PM</p>
            </div>
            <p className=" font-medium">75°</p>
          </div>
          <div className=" bg-neutral-70 border border-neutral-60 flex items-center justify-between px-3 h-[60px] rounded-md">
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
          </div>
        </div>
      </div>
    </div>
  );
}
