import { create } from 'zustand';

const useSerialStore = create((set, get) => ({
  port: null,
  labelPort: "",
  isReading: false,
  serialData: [],
  reader: null,
  buffer: "",

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
    const currentBuffer = get().buffer + value;
    
    //delimitador 'UMSA'
    if (currentBuffer.endsWith('UMSA')) {
      console.log(currentBuffer);
      set((state) => ({
        serialData: [...state.serialData, currentBuffer].slice(-100),
        buffer: "" // Limpiar buffer
      }));
    } else {
      set({ buffer: currentBuffer });
    }
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