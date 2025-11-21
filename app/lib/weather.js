export async function geocodeCity(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  return {
    name: data.results[0].name,
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
    country: data.results[0].country
  };
}


export async function fetchWeather(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

  const data = await res.json();
  
  return data;
}

export async function hourlyForecast(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&forecast_days=1`
  );

  const data = await res.json();
  
  return data;
}

export async function dailyForecast(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min`
  );

  const data = await res.json();
  
  return data;
}