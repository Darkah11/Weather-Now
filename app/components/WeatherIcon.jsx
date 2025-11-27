import Image from "next/image";
// import { weatherCodeToIcon } from "@/lib/weatherIcons";
import { weatherCodeToIcon } from "../lib/weatherIcons";

export default function WeatherIcon({ code, size = 64 }) {
  const icon = weatherCodeToIcon[code] ?? "/icon-error.svg";

  return (
    <Image
      src={icon}
      alt={`Weather icon (${code})`}
      width={size}
      height={size}
    />
  );
}
