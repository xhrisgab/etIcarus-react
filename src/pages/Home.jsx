import SerialComponent from "../components/SerialComponent";
import AlturaH from "../components/AlturaH";
import Bateria from "../components/Bateria";
import Scene3D from "../components/Scene3D";
import Card from "../components/Card";
import useSerialStore from "../store/serialStore";
import Missionbutton from "../components/Missionbutton";
import LogStatus from "../components/LogStatus";
const Home = () => {
  //devuelve el string del Serial serialData[serialData.lenght-1]
  const serialData = useSerialStore((state) => state.serialData);

  return (
    <div className="flex-col justify-center align-middle w-full">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <SerialComponent />
          <div className="flex flex-row justify-around py-4">
            <div className="">
              <Missionbutton />
            </div>
            <div>
              <h1>Autogiro desplegado <span className="text-icarus-4">No</span></h1>
              <h1>Camaras iniciadas <span  className="text-icarus-4">No</span></h1>
              <a
                href="#/imagen"
                target="_blank"
                rel="noonpener noreferrer"
                className="btn ms-4 justify-around bg-icarus-1 border-icarus-4 border-2 text-icarus-4 rounded-2xl hover:bg-icarus-5"
              >
                Ver Imagen Estereoscopica
              </a>
            </div>


          </div>
          <div className="flex flex-row justify-around">
            <Bateria />
            <AlturaH />
          </div>
        </div>
        <div className="w-1/2">
          <div className=" h-full">
            <Scene3D></Scene3D>
          </div>
        </div>


      </div>

      <section className="">


        <div className="grid grid-cols-3">
          <div>
            <Card title="VELOCIDAD" dataKey="VELOCIDAD" unit="[m/s]" value="18" />
          </div>
          <div>
            <Card title="PRESION" dataKey="PRESION" unit="[kPa]" value="18" />
          </div>
          <div>
            <Card title="TEMPERATURA" dataKey="TEMPERATURA" unit="ºC" value="18" />
          </div>
          <div>
            <Card title="ACELERACION" dataKey="ACELERACION" unit="[m/s^2]" value="18" />
          </div>
        </div>
      </section>
      <LogStatus></LogStatus>
    </div>
  );
};
export default Home;
