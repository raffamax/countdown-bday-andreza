"use client";

import Title from "./components/Title";
import Counter from "./components/Counter";
import useCountdown from "./hooks/useCountDown";

export default function Home() {
  const [day, hour, minute, second, age] = useCountdown(
    "Oct 6, 2024 00:00:00",
    2008
  );

  return (
    <>
      <div className="app">
        <div className="container">
          <Title
            title={`Contagem regressiva para o B-day da Andreza ${age} anos`}
          />
          <div className="countdown-container">
            <Counter title="Dias" number={day} />
            <Counter title="Horas" number={hour} />
            <Counter title="Minutos" number={minute} />
            <Counter title="Segundos" number={second} />
          </div>
        </div>
      </div>
    </>
  );
}
