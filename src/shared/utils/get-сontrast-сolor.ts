import { colord } from "colord";

export function getContrastColor(color: string) {
  const luminance = colord(color).luminance()

  return luminance > 0.5 ? "#000000" : "#ffffff"
}