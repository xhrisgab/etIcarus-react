import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const data = [
  { name: "2026/04/06 10:43", valor: 18.94, hora: "10:43" },
  { name: "2026/04/06 10:45", valor: 19.01, hora: "10:45" },
  { name: "2026/04/06 10:46", valor: 19.01, hora: "10:46" },
  { name: "2026/04/06 10:47", valor: 19.2, hora: "10:47" },
  { name: "2026/04/06 10:49", valor: 19.5, hora: "10:49" },
  { name: "2026/04/06 10:50", valor: 19.51, hora: "10:50" },
];
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-icarus-1 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-xs text-icarus-3">
          {payload[0].payload.name}
        </p>
        <p className="text-medium text-xs text-icarus-5">
          {payload[0].value} [m]
        </p>
      </div>
    );
  }
};

const Card = (props) => {
  return (
    <div className="card bg-icarus-2 w-auto shadow-sm m-2">
      <div className="card-body">
        <h2 className="card-title justify-center text-icarus-5 font-medium">
          {props.title} <span className="text-icarus-4">{props.value}</span>
          {props.unit}
        </h2>

        <LineChart
          style={{ width: "100%", height: "70%" }}
          responsive
          data={data}
          margin={{
            top: 5,
            right: 1,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            horizontal={true}
            vertical={false}
            stroke="#36BFBF"
            strokeWidth={1.5}
          />
          <XAxis dataKey="hora" stroke="#FFF" textLength={30} />
          <YAxis stroke="#FFF" />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Line type="monotone" dataKey="valor" stroke="#F27244" />
          <RechartsDevtools />
        </LineChart>

        <div className="card-actions justify-center">
          <button className=" btn bg-icarus-1 border-icarus-4 border-2 text-icarus-4 rounded-2xl hover:bg-icarus-5">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
