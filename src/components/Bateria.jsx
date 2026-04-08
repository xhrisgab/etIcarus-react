import React, { useState, useEffect } from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function RealTimeSystem() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const showTime = hora
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    .replace(/:/g, ".");
  const showDate = hora
    .toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, ".");

  return (
    <>
      <div className="flex justify-between">
        <div>Hora Sistema:</div>
        {showTime}
      </div>
      <div className="flex justify-between">
        <div>Fecha Sistema:</div>
        {showDate}
      </div>
    </>
  );
}

const Bateria = () => {
  const percentage = 73;
  return (
    <>
      <div className="text-icarus-3 mx-4 font-bold">
        <RealTimeSystem />
      </div>
      <h1 className="card-title justify-center mt-4">
        <div className="text-icarus-5 text-lg font-normal">Bateria</div>
      </h1>
      <CircularProgressbar
        className="h-40 mt-2"
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#FFF",
          pathColor: "#36BFBF",
          trailColor: "#1F6A73",
        })}
        counterClockwise
      />
    </>
  );
};

export default Bateria;
