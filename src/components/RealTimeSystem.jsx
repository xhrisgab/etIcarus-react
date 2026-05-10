import { useState, useEffect } from "react";
function RealTimeSystem() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const showTime = hora
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    .replace(/:/g, ".");
  const showDate = hora
    .toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, ".");

  return (
    <>
      <div className="flex justify-between">
        <div>Hora Sistema:</div>
        {showTime}
      </div>
      <div className="flex justify-between">
        <div>Fecha Sistema:</div>
        {showDate}
      </div>
    </>
  );
}
export default RealTimeSystem;