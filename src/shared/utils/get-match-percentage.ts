export function getMatchPercentage(deltaCoeff: number){
  const convertCoefficient = 1 - deltaCoeff
  return (convertCoefficient * 100).toFixed(1).toString()
}