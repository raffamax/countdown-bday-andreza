"use client";

import { useState, useEffect } from "react";

const useCountdown = (initialDate: string, birthYear: number) => {
  const [day, setDay] = useState<number | null>(null);
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);
  const [second, setSecond] = useState<number | null>(null);
  const [targetDate, setTargetDate] = useState<Date>(new Date(initialDate));
  const [age, setAge] = useState<number>(new Date().getFullYear() - birthYear);

  const countDown = () => {
    const now = new Date().getTime();
    const countDate = targetDate.getTime();

    if (now > countDate) {
      const newTargetDate = new Date(
        targetDate.setFullYear(targetDate.getFullYear() + 1)
      );
      setTargetDate(newTargetDate);
      setAge((prevAge) => prevAge + 1);
    }

    const interval = targetDate.getTime() - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(interval / day);
    const hourNumber = Math.floor((interval % day) / hour);
    const minuteNumber = Math.floor((interval % hour) / minute);
    const secondNumber = Math.floor((interval % minute) / second);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minuteNumber);
    setSecond(secondNumber);
  };

  useEffect(() => {
    const interval = setInterval(countDown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return [day, hour, minute, second, age];
};

export default useCountdown;
