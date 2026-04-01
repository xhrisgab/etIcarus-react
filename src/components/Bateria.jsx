import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Batery = () => {
  const data = {
    labels: [" ", "Bateria"],
    datasets: [
      {
        data: [37, 63],
        backgroundColor: ["#1F6A73", "#36BFBF"],
      },
    ],
  };
  const opciones = {
    responsive: true,
  };

  return <Doughnut data={data} options={opciones} />;
};

export default Batery;
