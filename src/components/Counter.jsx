import { useEffect } from "react";
import { useState } from "react";
import "./css/counter.css";

export default function Countdown() {
  const [timing, setTiming] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      const date = new Date();
      const newYear = new Date("2024-10-31T15:30:00");
      const timeRemain = newYear - date;

      setTiming({
        días: Math.floor(timeRemain / (1000 * 60 * 60 * 24)) % 30,
        horas: Math.floor(timeRemain / (1000 * 60 * 60)) % 24,
        minutos: Math.floor(timeRemain / (1000 * 60)) % 60,
        segundos: Math.floor(timeRemain / 1000) % 60,
      });
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="fullContainer">
      <h2 className="title">Falta:</h2>
      <div className="countdown">
          <div className="timeBlock1">
            <h2>{timing.días}</h2>
            <h3>Días</h3>
          </div>
          <div className="timeBlock2">
            <h2>{timing.horas}</h2>
            <h3>Hrs</h3>
          </div>
          <div className="timeBlock3">
            <h2>{timing.minutos}</h2>
            <h3>Min</h3>
          </div>
          <div className="timeBlock4">
            <h2>{timing.segundos}</h2>
            <h3>Seg </h3>
          </div>
        </div>
    </div>
  );
}
