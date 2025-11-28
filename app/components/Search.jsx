"use client";
import Image from "next/image";
import React, { useState } from "react";
import search from "@/public/icon-search.svg";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSearch() {
    // const value = e.target.value;
    // setQuery(value);

    // if (value.length < 2) return;
    setLoading(true);
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
    // console.log(data);
  }
  const handleSelect = (place) => {
    const params = new URLSearchParams(searchParams);
    params.set("lat", place.lat);
    params.set("lon", place.lon);

    router.push(`/?${params.toString()}`);
    setResults([]);
    setQuery("");
  };
  return (
    <div className=" flex flex-col md:flex-row md:gap-x-4 gap-y-3 max-w-[420px] mx-auto md:max-w-none lg:max-w-[656px] lg:mx-auto">
      <div className=" w-full relative">
        <Image
          className=" w-5 h-5 absolute top-0 bottom-0 my-auto left-4"
          src={search}
          alt="Search icon"
        />
        <input
          className=" w-full placeholder:text-neutral-20 placeholder:text-lg
          bg-neutral-80 h-[56px] rounded-lg pl-12 pr-3 outline-none"
          type="text"
          placeholder="Search for a place..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            e.target.value === "" && setResults([]);
          }}
        />
        {!loading && results.length > 0 ? (
          <div className=" absolute top-[65px] w-full rounded-lg bg-neutral-80 p-1 z-30 flex flex-col ">
            {results.map((city, index) => (
              <button
                onClick={() => handleSelect({ lat: city.lat, lon: city.lon })}
                className=" text-left p-2 hover:bg-neutral-60 rounded-lg"
                key={index}
              >
                {city.name}
              </button>
            ))}
          </div>
        ) : loading ? (
          <div className=" absolute top-[65px] w-full rounded-lg bg-neutral-80 p-1 z-30 flex flex-col ">
            <p className=" p-3">Search in progress...</p>
          </div>
        ) : null}
      </div>
      <div className=" w-full md:w-fit">
        <button
          onClick={handleSearch}
          type="submit"
          className=" text-lg h-[56px] rounded-lg px-3 bg-blue-50 w-full"
        >
          Search
        </button>
      </div>
    </div>
  );
}
