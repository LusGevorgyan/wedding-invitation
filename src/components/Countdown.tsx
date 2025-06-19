import React, { useEffect, useState } from 'react';
import './count-down.css'; 

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | null => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <p className="countdown-ended">Միջոցառումը արդեն սկսվել է։</p>;
  }

  return (
    <div className="countdown-container">
      <div className="time-box">
        <div className="number">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="label">Օր</div>
      </div>
      <div className="time-box">
        <div className="number">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="label">Ժամ</div>
      </div>
      <div className="time-box">
        <div className="number">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="label">Րոպե</div>
      </div>
      <div className="time-box">
        <div className="number">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="label">Վայրկյան</div>
      </div>
    </div>
  );
};

export default Countdown;
