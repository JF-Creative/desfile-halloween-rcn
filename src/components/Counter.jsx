import { useEffect } from "react";
import { useState } from "react";
import "./css/counter.css";

export default function Countdown() {
  const [timing, setTiming] = useState("");
  const date = new Date();
  const newYear = new Date("2024-10-31T15:30:00");
  const today = new Date("2024-10-31T00:00:00");
  const thanks = new Date("2024-10-31T19:00:00");

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

  if (date >= newYear){
    return(
      <div className="fullContainer">
        <h2>¡Vamos a empezar!</h2>
        <h3>Nos vemos en Multicentro</h3>
      </div>
    )
  }
  
  if (date >= today){
    return(
      <div className="fullContainer">
        <h2 className="title">Falta:</h2>
        <div className="countdown">
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
    )
  }

  if (date >= thanks){
    return(
      <div className="fullContainer">
        <h2>¡Gracias Ibagué!</h2>
        <h3>La pasamos genial con nuestros niños y niñas</h3>
      </div>
    )
  }

  else{
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
}
