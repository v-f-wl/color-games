
interface ShowColorProps{
  currentColor: string
}
const ShowColor = ({currentColor}: ShowColorProps) => {
  return ( 
    <div 
      className={`
        wrapper max-w-6xl pt-14 h-80 border
      `}
      style={{background: currentColor}}
    >
    </div>
   );
}
 
export default ShowColor;