import type { RadarData } from "../types/radar";

const RADAR_BASE = "/data/radar";
const CACHE_KEY = "miaoji_radar_cache";

function getTodayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function getFallbackData(): RadarData {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as RadarData;
      if (parsed.industry && parsed.trending) return parsed;
    }
  } catch {
    /* ignore */
  }
  return { date: getTodayStr(), industry: [], trending: [], jieqi: [], updatedAt: new Date().toISOString() };
}

export async function fetchRadarData(): Promise<RadarData> {
  const today = getTodayStr();
  const urls = [
    `${RADAR_BASE}/industry-${today}.json`,
    `${RADAR_BASE}/trending-${today}.json`,
    `${RADAR_BASE}/jieqi-${today}.json`,
  ];

  try {
    const responses = await Promise.all(
      urls.map((url) =>
        fetch(url).then((r) => {
          if (!r.ok) throw new Error("Not found");
          return r.json();
        })
      )
    );
    const data: RadarData = {
      date: today,
      industry: responses[0],
      trending: responses[1],
      jieqi: responses[2],
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    return data;
  } catch {
    return getFallbackData();
  }
}

export async function refreshRadarData(): Promise<RadarData> {
  localStorage.removeItem(CACHE_KEY);
  return fetchRadarData();
}
