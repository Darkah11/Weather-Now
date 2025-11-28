import { NextResponse } from "next/server";
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';


export const dynamic = 'force-dynamic';

export async function GET(req) {
  const q = req.nextUrl.searchParams.get("q");
  try {
    // const { searchParams } = new URL(req.url);
    // const q = searchParams.get("q");

    // If q is missing, return empty array
    // if (!q) {
    //   return NextResponse.json([], { status: 200 });
    // }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      q
    )}&limit=5`;

    const res = await fetch(url, {
      headers: {
        "User-Agent": "YourApp/1.0",
      },
    });

    // If the external API fails
    if (!res.ok) {
      return NextResponse.json(
        { error: `Nominatim request failed with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();

    const results = data.map((item) => ({
      name: item.display_name,
      lat: item.lat,
      lon: item.lon,
    }));

    return NextResponse.json(results, { status: 200 });
  } catch (err) {
     if (isDynamicServerError(err)) {
        throw err;
    }
    console.error("Geocoding API Error:", err);

    return NextResponse.json(
      {
        error: "An unexpected error occurred while searching for locations.",
        details: err.message,
      },
      { status: 500 }
    );
  }
}
