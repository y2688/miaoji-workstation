import { useState, useEffect, useCallback } from "react";
import { fetchRadarData, refreshRadarData } from "../lib/radar-api";
import type { RadarData } from "../types/radar";

interface UseRadarResult {
  data: RadarData | null;
  loading: boolean;
  error: string | null;
  isOffline: boolean;
  refresh: () => Promise<void>;
}

export function useRadar(): UseRadarResult {
  const [data, setData] = useState<RadarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchRadarData();
      setData(result);
      setIsOffline(result.industry.length === 0 && result.trending.length === 0);
    } catch (e) {
      setError(e instanceof Error ? e.message : "数据加载失败");
      setIsOffline(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await refreshRadarData();
      setData(result);
      setIsOffline(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "刷新失败");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, isOffline, refresh };
}
