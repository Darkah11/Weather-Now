import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.svg";
import unit from "@/public/icon-units.svg";
import dropdown from "@/public/icon-dropdown.svg";

export default function Header() {
  return (
    <div className=" px-4 py-7 flex justify-between items-center">
      <Link href={"/"}>
        <Image src={logo} alt="weather now logo" className=" w-32" />
      </Link>
      <div>
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
          <button className=" w-full py-[6px] rounded-md text-neutral-0 bg-neutral-80 text-sm">Units</button>
        </div>
      </div>
    </div>
  );
}
