import SerialComponent from "../components/SerialComponent";
import AlturaH from "../components/AlturaH";
import Bateria from "../components/Bateria";
import Scene3D from "../components/Scene3D";
import Card from "../components/Card";
import useSerialStore from "../store/serialStore";
const Home = () => {
  //devuelve el string del Serial serialData[serialData.lenght-1]
  const serialData = useSerialStore((state) => state.serialData);

  return (
    <div className="flex-col justify-center align-middle w-full">
      <div>
        <button className="btn justify-around bg-icarus-1 border-icarus-4 border-2 text-icarus-4 rounded-2xl hover:bg-icarus-5">
          Empezar mision!
        </button>
        <a
          href="#/imagen"
          target="_blank"
          rel="noonpener noreferrer"
          className="btn ms-4 justify-around bg-icarus-1 border-icarus-4 border-2 text-icarus-4 rounded-2xl hover:bg-icarus-5"
        >
          Ver Imagen Estereoscopica
        </a>
      </div>
      <section className="flex flex-row justify-around">
        <div className="w-1/3">
          <SerialComponent />
          <div>
            <h1 className="text-icarus-5 text-lg">Estado - Logs</h1>
            <textarea
              className="mb-2 w-full h-20 resize-none bg-icarus-1 border-icarus-5 text-icarus-3 border-2 rounded-lg"
              name="Logs"
              id="logs"
              defaultValue={serialData.map((line, index) => ">" + line)}
            ></textarea>
          </div>
        </div>
        {/* Altura del Cansat */}
        <div>
          <AlturaH />
        </div>

        {/* Fecha y Bateria */}
        <div>
          <Bateria />
        </div>
      </section>

      <section className="flex flex-row">
        <div className="w-1/2 h-full">
          <Scene3D></Scene3D>
        </div>

        <div className="w-1/2 grid grid-cols-2">
          <div>
            <Card title="Velocidad -" unit="[m/s]" value="18" />
          </div>
          <div>
            <Card title="Presion -" unit="[kPa]" value="18" />
          </div>
          <div>
            <Card title="Temperatura -" unit="ºC" value="18" />
          </div>
          <div>
            <Card title="Acelercion -" unit="[m/s^2]" value="18" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
