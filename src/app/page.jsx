"use client";

// import Image from "next/image";
// import Head from "next/head";
import Title from "./components/Title";
import Counter from "./components/Counter";
// import bolodeaniversario from "../../public/bolodeaniversario.png";

import useCountdown from "./hooks/useCountDown";

export default function Home() {
  const [day, hour, minute, second] = useCountdown("Oct 6, 2024 00:00:00");

  return (
    <>
      {/* <Head>
        <link rel="icon" href={bolodeaniversario} />
      </Head> */}
      <div className="app">
        <div className="container">
          <Title title="Contagem regressiva para o B-day da Andreza 16 anos" />
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
