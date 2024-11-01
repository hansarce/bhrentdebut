// Countdown.js
import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown text-white text-3xl">
      {timeLeft.days !== undefined ? (
        <div>
          <span>{timeLeft.days} Days </span>
          <span>{timeLeft.hours} Hours </span>
          <span>{timeLeft.minutes} Minutes </span>
          <span>{timeLeft.seconds} Seconds</span>
        </div>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
};

export default Countdown;
