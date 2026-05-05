import { useEffect, useState } from "react";

interface ShowColorProps {
  currentColor: string
  onComplete: () => void
  duration: number
}
const ShowColor = ({ currentColor, onComplete, duration }: ShowColorProps) => {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1000)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onComplete])

  const seconds = Math.floor((timeLeft % 60000) / 1000)
  return (
    <div
      className='w-full h-screen relative'
      style={{ background: currentColor }}
    >
      <div
        className="
          absolute lg:bottom-10 lg:right-10
          p-4 w-28 h-28 flex items-center justify-center rounded-full
          lg:text-8xl text-gray-100 bg-neutral-700
        "
      >
        {String(seconds).padStart(2,)}
      </div>
    </div>
  );
}

export default ShowColor;