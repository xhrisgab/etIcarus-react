import { BarChart, Bar, YAxis, CartesianGrid, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useEffect, useState } from "react";
import useSerialStore from "../store/serialStore";
const data = [
  {
    name: "Altura",
    Altura: 423,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-icarus-1 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-icarus-5">
          {payload[0].value} [m]
        </p>
        {/* <p className="text-medium text-lg">{payload[0].value}</p> */}
      </div>
    );
  }
};

const AlturaH = () => {
  const [altitude, setAltitude] = useState([]);
  const serialData = useSerialStore((state) => state.serialData);
  useEffect(() => {
    if (serialData.length === 0) return;
    const last = serialData[serialData.length - 1];
    setAltitude([{name:"Altura",Altura:last.ALTURA},]);
  }, [serialData]);
  return (
    <div className=" bg-icarus-1 h-80">
      <h1 className="text-icarus-4 text-center text-xl font-bold py-4">
        Altura - <span className="text-icarus-5">{"423"}</span> [m]
      </h1>

      <div>
        <BarChart
          width={250}
          height={190}
          responsive
          data={altitude}
          margin={{
            top: 5,
            right: 50,
            left: 40,
            bottom: 8,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#051926"
            strokeWidth={1.5}
          />
          <YAxis
            domain={[0, 600]}
            // tickFormatter={(tick) => `${tick} m`}
            tick={{ fontSize: 14, fill: "#fff" }}
          />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Bar
            dataKey="Altura"
            fill="#F2B441"
            background
            radius={[10, 10, 0, 0]}
          />
          <RechartsDevtools />
        </BarChart>
      </div>
    </div>
  );
};

export default AlturaH;
