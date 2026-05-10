import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect,useState } from "react";
import useSerialStore from "../store/serialStore";
const Bateria = () => {
  const [percentage, setPercentage] = useState(0);
  const serialData = useSerialStore((state) => state.serialData);
  useEffect(() => {
    if (serialData.length === 0) return;
    const last = serialData[serialData.length - 1];
    setPercentage(last.BATERIA)
  }, [serialData]);
  return (
    <div>
      
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
    </div>
  );
};

export default Bateria;
