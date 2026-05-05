import { colord } from "colord"
import type { HistoryListType } from "../../types"


export function getMatchPercentage(deltaCoeff: number){
  return (1 - deltaCoeff) * 100
}

const getDelta = (pair: HistoryListType) => colord(pair.targetColor).delta(pair.selectedColor)

export function calculateAverageColorDifference(colorPairsList: HistoryListType[]) {
  if (colorPairsList.length === 0) return 0;

  const total = colorPairsList.reduce(
    (sum, pair) => sum + getMatchPercentage(getDelta(pair)),
    0
  );

  return total / colorPairsList.length
}