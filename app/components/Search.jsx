import Image from "next/image";
import React from "react";
import search from "@/public/icon-search.svg";

export default function Search() {
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
        />
      </div>
      <div className=" w-full md:w-fit">
        <button type="submit" className=" text-lg h-[56px] rounded-lg px-3 bg-blue-50 w-full">Search</button>
      </div>
    </div>
  );
}
