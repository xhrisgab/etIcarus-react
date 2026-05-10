import useSerialStore from "../store/serialStore";
import RealTimeSystem from "./RealTimeSystem";

const Missionbutton = () => {
  const startMission = useSerialStore(s => s.startMission);
  const stopMission = useSerialStore(s => s.stopMission);
  const downloadCSV = useSerialStore(s => s.downloadCSV);
  const isRecording = useSerialStore(s => s.isRecording);
  const flushCount = useSerialStore(s => s.flushCount);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-icarus-3 mx-4 font-bold">
        <RealTimeSystem />
      </div>
      <div className="flex justify-center">

        {!isRecording ? (
          <button
            onClick={startMission}
            className="flex justify-around px-4 py-2 bg-icarus-1 border-icarus-4 border-2 text-icarus-4 rounded-2xl hover:bg-icarus-5 hover:text-white"
          >
            Empezar misión
          </button>
        ) : (
          <button
            onClick={() => {
              stopMission();
              downloadCSV();
            }}
            className="p-4 bg-red-600 text-white"
          >
            Terminar misión
          </button>
        )}
      </div>
      <span className="flex justify-center text-white">
        datos guardados: {flushCount}
      </span>
    </div>
  )
}
export default Missionbutton;