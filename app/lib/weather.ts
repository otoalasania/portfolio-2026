import "server-only";

// Alicante, Spain — Open-Meteo is free and keyless
const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=38.3452&longitude=-0.4810&current=temperature_2m,weather_code";

export type WeatherKind = "sun" | "partly-cloudy" | "cloud" | "fog" | "rain" | "storm" | "snow";

export type Weather = { temperatureC: number; kind: WeatherKind };

// WMO weather interpretation codes, as documented by Open-Meteo
function kindFromCode(code: number): WeatherKind {
  if (code === 0) return "sun";
  if (code === 1 || code === 2) return "partly-cloudy";
  if (code === 3) return "cloud";
  if (code === 45 || code === 48) return "fog";
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow";
  if (code >= 95) return "storm";
  return "rain"; // 51–67 drizzle/rain, 80–82 showers
}

/**
 * Current Alicante weather, cached for 30 minutes (this also makes the page that
 * renders it revalidate every 30 minutes). Returns null on any failure or timeout —
 * the footer then simply leaves the temperature out.
 */
export async function getWeather(): Promise<Weather | null> {
  try {
    const res = await fetch(WEATHER_URL, {
      next: { revalidate: 1800 },
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return null;
    const data: { current?: { temperature_2m?: unknown; weather_code?: unknown } } = await res.json();
    const temperature = data.current?.temperature_2m;
    const code = data.current?.weather_code;
    if (typeof temperature !== "number" || typeof code !== "number") return null;
    return { temperatureC: Math.round(temperature), kind: kindFromCode(code) };
  } catch {
    return null;
  }
}
