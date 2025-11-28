// export async function geocodeCity(city) {
//   const res = await fetch(
//     `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`, {
//     next: { revalidate: 0 },
//   }
//   );
//   const data = await res.json();

//   if (!data.results || data.results.length === 0) {
//     throw new Error("City not found");
//   }

//   return {
//     name: data.results[0].name,
//     latitude: data.results[0].latitude,
//     longitude: data.results[0].longitude,
//     country: data.results[0].country
//   };
// }

export async function geocodeCityX(lat, lon) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}
`, {
    next: { revalidate: 0 },
  }
  );
  const data = await res.json();
  console.log(data);
  

  // if (!data.results || data.results.length === 0) {
  //   throw new Error("City not found");
  // }

  return {
    city: data.address.city || data.address.village || data.address.state || null,
    country: data.address.country || null,
  };
}


export async function fetchWeather(lat, lon, unit) {
  const res = await fetch(
    unit === 'metric' ?
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code`
      :
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`, {
    next: { revalidate: 0 },
  }
  );

  const data = await res.json();

  return data;
}

export async function hourlyForecast(lat, lon, unit) {
  const res = await fetch(
    unit === 'metric' ?
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code`
      :
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit`

  );

  const data = await res.json();

  return data;
}

export async function dailyForecast(lat, lon, unit) {
  const res = await fetch(
    unit === 'metric' ?
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min` :
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit`, {
    next: { revalidate: 0 },
  }
  );

  const data = await res.json();

  return data;
}


