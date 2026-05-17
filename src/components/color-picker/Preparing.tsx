import { useState, useEffect } from 'react';

interface PreparingProps {
  duration: number; // общее время в мс (например, 120000 для 2 минут)
  onComplete: () => void;
}

const Preparing = ({ duration, onComplete }: PreparingProps) => {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1000)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onComplete])

  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-2 text-black dark:text-white'>
      <span className='text-6xl font-bold'>
        {String(seconds).padStart(2,)}
      </span>
      <p className='font-light'>Приготовьтесь...</p>
    </div>
  );
};

export default Preparing