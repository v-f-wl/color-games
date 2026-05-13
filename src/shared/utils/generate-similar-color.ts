
import { colord } from "colord";

export default function generateSimilarColor(color: string, hueShift: number){
  const hsl = colord(color).toHsl()

  let newHue = (hsl.h + hueShift) % 360;
  if (newHue < 0) newHue += 360

  return colord({ ...hsl, h: newHue }).toHex()
}