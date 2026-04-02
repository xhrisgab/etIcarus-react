import React, { useState } from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Bateria = () => {
  const [date, setDate] = useState(new Date());

  const percentage = 73;
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div>Hora Sistema:</div>
          <div>{date.toDateString()}</div>
        </div>
        <div className="flex justify-between">
          <div>Fecha Sistema:</div>
          <div>{date.toDateString()}</div>
        </div>
      </div>
      <h1 className="card-title justify-center">
        <div className="text-icarus-5 text-lg">Bateria</div>
      </h1>
      <CircularProgressbar
        className="h-40"
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
