import { random } from "colord"
export default function generateRandomColor(){
  return random().toHex()
}