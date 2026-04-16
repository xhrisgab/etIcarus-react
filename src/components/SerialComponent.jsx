import useSerialStore from "../store/serialStore";
const SerialComponent = () => {
  const { connect, disconnect, isReading, labelPort } = useSerialStore();
  return (
    <div>
      <h1 className="text-icarus-4 text-center text-xl font-bold py-4">
        Puerto Serial
      </h1>
      <div className="flex justify-between my-2">
        <input
          type="text"
          className="w-full bg-icarus-4 border-3 border-icarus-2 text-black text-center font-bold rounded-xl"
          placeholder="Puerto seleccionado..."
          value={labelPort || "ninguno"}
          disabled
        />
        <button
          className={`btn justify-around bg-icarus-1 border-icarus-4 border-2  rounded-2xl  font-bold transition-all 
                        ${
                          isReading
                            ? " text-icarus-4 border border-red-500 hover:bg-icarus-5 hover:text-white"
                            : "text-icarus-3 hover:bg-icarus-5 shadow-lg shadow-green-900/20"
                        }`}
          onClick={isReading ? disconnect : connect}
        >
          {isReading ? "DETENER LECTURA" : "INICIAR CONEXIÓN"}
        </button>
      </div>
    </div>
  );
};
export default SerialComponent;
