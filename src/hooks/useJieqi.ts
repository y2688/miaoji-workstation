import { useMemo } from "react";
import { getCurrentJieqi, getJieqiByName } from "../lib/jieqi-data";
import type { JieqiInfo } from "../lib/jieqi-data";

interface UseJieqiResult {
  currentJieqi: JieqiInfo;
  nextJieqi: JieqiInfo;
  daysUntilNext: number;
}

export function useJieqi(date?: Date): UseJieqiResult {
  return useMemo(() => {
    const { current, next, daysUntilNext } = getCurrentJieqi(date);
    return { currentJieqi: current, nextJieqi: next, daysUntilNext };
  }, [date?.toISOString()]);
}

export { getJieqiByName };
export type { JieqiInfo };
