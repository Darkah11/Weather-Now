"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import unit from "@/public/icon-units.svg";
import dropdown from "@/public/icon-dropdown.svg";
import check from "@/public/icon-checkmark.svg";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current = searchParams.get("unit") || "metric";

  const toggleUnit = () => {
    const params = new URLSearchParams(searchParams);

    const next = current === "metric" ? "imperial" : "metric";

    params.set("unit", next); // update unit, keep everything else

    router.push(`/?${params.toString()}`);
  };

  const [open, setOpen] = useState(false);
  const [metric, setMetric] = useState(true);

  return (
    <div className=" max-w-[1440px] mx-auto px-4 md:px-6 xl:px-28 py-7 flex justify-between items-center">
      <Link href={"/"}>
        <Image src={logo} alt="weather now logo" className=" w-32" />
      </Link>
      <div className=" relative">
        <div className=" relative w-[100px] h-fit">
          <Image
            className=" absolute top-0 left-[10px] bottom-0 my-auto"
            src={unit}
            alt="unit icon"
          />
          <Image
            className=" absolute top-0 right-[10px] bottom-0 my-auto"
            src={dropdown}
            alt="dropdown icon"
          />
          <button
            onClick={() => setOpen(!open)}
            className=" w-full py-[6px] rounded-md text-neutral-0 bg-neutral-80 text-sm"
          >
            Units
          </button>
        </div>
        <div
          className={` ${
            open ? "block" : "hidden"
          } w-[214px] bg-neutral-80 py-1 px-2 border border-neutral-60 absolute z-50 rounded-lg top-[40px] right-0`}
        >
          <button
            onClick={() => {
              toggleUnit();
              setOpen(false);
            }}
            className="px-2 rounded-md py-2 w-full text-left hover:bg-neutral-60"
          >
            Switch to {current === "metric" ? "Imperial" : "Metric"}
          </button>
          <div className=" border-b border-neutral-60 py-1">
            <p className=" px-2 text-sm font-medium text-neutral-30 mb-1">
              Temperature
            </p>
            <div
              className={` ${
                current === "metric" ? "bg-neutral-60" : ""
              } px-2 flex items-center justify-between rounded-md py-[5px] w-full text-left `}
            >
              <p>Celsius (°C)</p>
              {current === "metric" ? (
                <Image src={check} alt="checkmark icon" />
              ) : null}
            </div>
            <div
              className={` ${
                current !== "metric" ? "bg-neutral-60" : ""
              } px-2 flex items-center justify-between rounded-md py-[5px] w-full text-left `}
            >
              <p>Farenheit (°F)</p>
              {current !== "metric" ? (
                <Image src={check} alt="checkmark icon" />
              ) : null}
            </div>
          </div>
          <div className=" border-b border-neutral-60 py-1">
            <p className=" px-2 text-sm font-medium text-neutral-30 mb-1">
              Wind Speed
            </p>
            <div
              className={` ${
                current === "metric" ? "bg-neutral-60" : ""
              } px-2 flex items-center justify-between rounded-md py-[5px] w-full text-left `}
            >
              <p>km/h</p>
              {current === "metric" ? (
                <Image src={check} alt="checkmark icon" />
              ) : null}
            </div>
            <div
              className={` ${
                current !== "metric" ? "bg-neutral-60" : ""
              } px-2 flex items-center justify-between rounded-md py-[5px] w-full text-left `}
            >
              <p>mph</p>
              {current !== "metric" ? (
                <Image src={check} alt="checkmark icon" />
              ) : null}
            </div>
          </div>
          <div className="  py-1">
            <p className=" px-2 text-sm font-medium text-neutral-30 mb-1">
              Precipitation
            </p>
            <div
              className={` ${
                current === "metric" ? "bg-neutral-60" : ""
              } px-2 flex items-center justify-between rounded-md py-[5px] w-full text-left `}
            >
              <p>millimeters (mm)</p>
              {current === "metric" ? (
                <Image src={check} alt="checkmark icon" />
              ) : null}
            </div>
            <div
              className={` ${
                current !== "metric" ? "bg-neutral-60" : ""
              } px-2 flex items-center justify-between rounded-md py-[5px] w-full text-left `}
            >
              <p>Inches (in)</p>
              {current !== "metric" ? (
                <Image src={check} alt="checkmark icon" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
