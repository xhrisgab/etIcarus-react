import { create } from 'zustand';
import { missionManager } from "../utils/missionManager";

const useSerialStore = create((set, get) => ({
  port: null,
  labelPort: "",
  isReading: false,
  serialData: [],
  reader: null,
  buffer: "",

  isRecording: false,
  packetCount: 0,
  flushCount: 0, // 

  startMission: () => {
    missionManager.start();
    set({ isRecording: true, flushCount: 0 });
  },

  stopMission: () => {
    missionManager.stop();
    set({ isRecording: false });
  },

  downloadCSV: () => {
    missionManager.download();
  },

  connect: async () => {
    try {
      // 1. Solicitar puerto
      const port0 = await navigator.serial.requestPort();
      await port0.open({ baudRate: 115200 });

      // 2. Configurar estado inicial
      const info = port0.getInfo();
      set({
        port: port0,
        labelPort: info.usbProductId || "Dispositivo Serial",
        isReading: true
      });

      // 3. Iniciar lectura
      const reader = port0.readable.getReader();
      set({ reader });
      console.log("init serial");
      get().readLoop(); // loop interno
    } catch (error) {
      console.error("Error al conectar:", error);
    }
  },

  readLoop: async () => {
    const { reader, processData } = get();
    const decoder = new TextDecoder();

    while (true) {
      try {
        const { value, done } = await reader.read();
        if (done) {
          reader.releaseLock();
          break;
        }
        const text = decoder.decode(value);
        processData(text);
      } catch (error) {
        console.error("Error en lectura:", error);
        set({ isReading: false });
        break;
      }
    }
  },
  processData: (value) => {
    let buffer = get().buffer + value;

    // Mientras exista un paquete completo
    while (buffer.includes('UMSA')) {

      const index = buffer.indexOf('UMSA');

      // Extraer un paquete completo
      const packet = buffer.substring(0, index).trim();

      // Recortar buffer restante
      buffer = buffer.substring(index + 4);

      // Procesar paquete
      const parts = packet.split(',');
      console.log(parts.length);
      const { isRecording } = get();
      
      if (parts.length === 18) {
        const parsed = {
          TYPE: parts[0],
          STATE: parts[1],
          TIEMPO: parts[2],
          PACKAGE: parts[3],
          SENSORS: parts[4],
          ACTUATORS: parts[5],
          TEMPERATURA: parts[6],
          PRESION: parts[7],
          ALTURA: parts[8],
          BATERIA: parts[9],
          Ax: parts[10],
          Ay: parts[11],
          Az: parts[12],
          Gx: parts[13],
          Gy: parts[14],
          Gz: parts[15],
          rssi:parts[16],
        };

        //console.log("Dato parseado:", parsed);
        let didFlush = false;

        if (isRecording) {
          missionManager.append(parsed);

          if (missionManager.shouldFlush()) {
            didFlush = missionManager.flush();
          }
        }
        set((state) => ({
          serialData: [...state.serialData, parsed].slice(-100),
          packetCount: state.packetCount + 1,
          flushCount: didFlush
            ? state.flushCount + 1
            : state.flushCount
        }));



      } else {
        console.warn("Paquete inválido:", packet);
      }
    }



    // Guardar lo que sobró (incompleto)
    set({ buffer });
  },

  disconnect: async () => {
    const { reader, port } = get();
    if (reader) {
      await reader.cancel();
      set({ reader: null });
    }
    if (port) {
      await port.close();
      set({ port: null, isReading: false, labelPort: "" });
    }
  }
}));

export default useSerialStore;