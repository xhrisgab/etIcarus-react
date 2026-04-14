import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useEffect, useState } from "react";

const data = [
  { name: "2026/04/06 10:43", valor: 18.94, pkg: "0" },
  { name: "2026/04/06 10:45", valor: 19.01, pkg: "1" },
  { name: "2026/04/06 10:46", valor: 19.01, pkg: "2" },
  { name: "2026/04/06 10:47", valor: 19.2, pkg: "3" },
  { name: "2026/04/06 10:49", valor: 19.5, pkg: "4" },
  { name: "2026/04/06 10:50", valor: 19.51, pkg: "5" },
];
function generateNextData(currentData) {
  const lastEntry = currentData[currentData.length - 1];
  //time
  const lastDate = new Date(lastEntry.name);
  const nextDate = new Date(lastDate.getTime() + 10000); // +10000ms = 1 seg
  // Formateo de strings (YYYY/MM/DD HH:mm)
  const pad = (n) => n.toString().padStart(2, "0");
  const dateStr = `${nextDate.getFullYear()}/${pad(nextDate.getMonth() + 1)}/${pad(nextDate.getDate())} ${pad(nextDate.getHours())}:${pad(nextDate.getMinutes())}`;
  const hourStr = `${pad(nextDate.getHours())}:${pad(nextDate.getMinutes())}`;
  const nroPkg = Number(lastEntry.pkg) + 1;
  const variation = 2;
  const change = (Math.random() * 2 - 1) * variation;
  const nextValue = parseFloat((lastEntry.valor + change).toFixed(2));

  return {
    name: dateStr,
    valor: nextValue,
    pkg: nroPkg + "",
  };
}

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
  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((current) => {
        const next = generateNextData(current);
        return [...current, next].slice(-6);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card bg-icarus-1 w-auto shadow-lg m-2">
      <div className="card-body">
        <h2 className="card-title justify-center text-icarus-5 font-medium">
          {props.title} <span className="text-icarus-4">{props.value}</span>
          {props.unit}
        </h2>

        <LineChart
          style={{ width: "100%", height: "70%" }}
          responsive
          data={chartData}
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
          <XAxis dataKey="pkg" stroke="#FFF" textLength={20} />
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
