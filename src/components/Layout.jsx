import Bateria from "./Bateria";
import Altura from "./Altura";
import Card from "./Card";

const Layout = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 m-10 font-poppins">
        {/* Primer cuadro de la interfaz */}
        <div>
          <h1 className="text-icarus-4 text-center text-xl">Puerto Serial</h1>
          <div className="flex justify-between my-2">
            <input
              type="text"
              className="w-full bg-icarus-4 border-3 border-icarus-2 text-black text-center font-bold rounded-xl"
              placeholder="Puerto seleccionado..."
              value={""}
              disabled
            />
            <button className="btn border-icarus-2 border-3 ml-2 text-icarus-2 bg-icarus-4 hover:bg-icarus-5">
              Conectar
            </button>
          </div>
          <div>
            <h1 className="text-icarus-5 text-lg">Estado - Logs</h1>
            <textarea
              className="mb-2 w-full h-20 resize-none bg-icarus-1 border-icarus-5 text-icarus-3 border-2 rounded-lg"
              name="Logs"
              id="logs"
              value={`* ${"Hola1"}
* ${"Hola2"}
* ${"Hola1"}`}
            ></textarea>
          </div>
          <button className="btn border-icarus-2 border-3 text-icarus-2 bg-icarus-4 w-full hover:bg-icarus-5">
            Empezar mision!
          </button>
        </div>

        {/* Vista 3D para giroscopio */}
        <div className="content-center">
          <h1 className="text-center text-icarus-5 text-lg">
            Estado - Giroscopio
          </h1>
          <img className="" src="/ejemlo.webp" alt="giroscopio" />
        </div>

        {/* Altura del Cansat */}
        <div>
          <Altura />
        </div>

        {/* Fecha y Bateria */}
        <div>
          <Bateria />
        </div>
      </div>

      {/* Segunda Seccion Telemetria */}

      <div className="grid grid-cols-4 font-poppins">
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
    </>
  );
};

export default Layout;
