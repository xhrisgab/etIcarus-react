const HEADERS = [
  "ICARUS","TIEMPO","ALTURA","BATERIA","VELOCIDAD",
  "PRESION","TEMPERATURA","ACELERACION","Gx","Gy","Gz"
];

let tempBuffer = [];     // acumula hasta 1000
let csvChunks = [];      // partes del CSV final

const CHUNK_SIZE = 1000;

export const missionManager = {

  start() {
    tempBuffer = [];
    csvChunks = [];

    // agregar header
    csvChunks.push(HEADERS.join(","));
  },

  append(data) {
    tempBuffer.push(data);

    if (tempBuffer.length >= CHUNK_SIZE) {
      this.flush();
      return true; // indica que hubo flush
    }

    return false;
  },
  shouldFlush() {
    return tempBuffer.length >= CHUNK_SIZE;
  },

  flush() {
    if (tempBuffer.length === 0) return;

    const rows = tempBuffer.map(d => [
      d.ICARUS,
      d.TIEMPO,
      d.ALTURA,
      d.BATERIA,
      d.VELOCIDAD,
      d.PRESION,
      d.TEMPERATURA,
      d.ACELERACION,
      d.Gx,
      d.Gy,
      d.Gz
    ].join(","));

    csvChunks.push(rows.join("\n"));
    tempBuffer = [];
  },

  stop() {
    this.flush();
  },

  download() {
    const csvContent = csvChunks.join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `icarus_mission_${Date.now()}.csv`;
    a.click();

    URL.revokeObjectURL(url);
  }
};



