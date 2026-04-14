import { useState, useEffect } from "react";

const Imagen = () => {
  //=====Control para contraste=========
  const [contraste, setContraste] = useState(100);

  const handleContraste = (e) => {
    const newContraste = e.target.value;
    setContraste(newContraste);
  };
  //=====Control para Zoom y Rotacion=========
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  //=====Control Imagen Cargada=========
  const [imagenCargada, setImagenCargada] = useState(false);
  const [error, setError] = useState(false);
  // Ruta donde se subirá la imagen (carpeta public de React)
  //const rutaImagen = "/icarus/icarus/imagen.png"; // Ajusta según tu estructura
  const urlCompleta = "/icarus/icarus/imagen.png";

  useEffect(() => {
    let intervalId;
    let timeoutId;

    const verificarImagen = () => {
      fetch(urlCompleta, { method: "HEAD" })
        .then((response) => {
          if (response.ok) {
            // ¡La imagen existe!
            setImagenCargada(true);
            clearInterval(intervalId);
            clearTimeout(timeoutId);
          }
        })
        .catch(() => {
          // La imagen aún no existe, seguimos esperando
          console.log("Esperando imagen...");
        });
    };

    // Verificar cada 2 segundos
    intervalId = setInterval(verificarImagen, 2000);

    // Timeout de seguridad: dejar de intentar después de 60 segundos
    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setError(true);
    }, 60000);

    // Limpiar al desmontar
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [urlCompleta]);

  if (error) {
    return <div>⚠️ Tiempo de espera agotado. La imagen no llegó.</div>;
  }

  if (!imagenCargada) {
    return (
      <div className="flex flex-full">
        <div className="content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <rect width="7.33" height="7.33" x="1" y="1" fill="currentColor">
              <animate
                id="SVGzjrPLenI"
                attributeName="x"
                begin="0;SVGXAURnSRI.end+0.2s"
                dur="0.6s"
                values="1;4;1"
              />
              <animate
                attributeName="y"
                begin="0;SVGXAURnSRI.end+0.2s"
                dur="0.6s"
                values="1;4;1"
              />
              <animate
                attributeName="width"
                begin="0;SVGXAURnSRI.end+0.2s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="0;SVGXAURnSRI.end+0.2s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
            <rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor">
              <animate
                attributeName="x"
                begin="SVGzjrPLenI.begin+0.1s"
                dur="0.6s"
                values="8.33;11.33;8.33"
              />
              <animate
                attributeName="y"
                begin="SVGzjrPLenI.begin+0.1s"
                dur="0.6s"
                values="1;4;1"
              />
              <animate
                attributeName="width"
                begin="SVGzjrPLenI.begin+0.1s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="SVGzjrPLenI.begin+0.1s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
            <rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor">
              <animate
                attributeName="x"
                begin="SVGzjrPLenI.begin+0.1s"
                dur="0.6s"
                values="1;4;1"
              />
              <animate
                attributeName="y"
                begin="SVGzjrPLenI.begin+0.1s"
                dur="0.6s"
                values="8.33;11.33;8.33"
              />
              <animate
                attributeName="width"
                begin="SVGzjrPLenI.begin+0.1s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="SVGzjrPLenI.begin+0.1s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
            <rect
              width="7.33"
              height="7.33"
              x="15.66"
              y="1"
              fill="currentColor"
            >
              <animate
                attributeName="x"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="15.66;18.66;15.66"
              />
              <animate
                attributeName="y"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="1;4;1"
              />
              <animate
                attributeName="width"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
            <rect
              width="7.33"
              height="7.33"
              x="8.33"
              y="8.33"
              fill="currentColor"
            >
              <animate
                attributeName="x"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="8.33;11.33;8.33"
              />
              <animate
                attributeName="y"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="8.33;11.33;8.33"
              />
              <animate
                attributeName="width"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
            <rect
              width="7.33"
              height="7.33"
              x="1"
              y="15.66"
              fill="currentColor"
            >
              <animate
                attributeName="x"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="1;4;1"
              />
              <animate
                attributeName="y"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="15.66;18.66;15.66"
              />
              <animate
                attributeName="width"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="SVGzjrPLenI.begin+0.2s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
            <rect
              width="7.33"
              height="7.33"
              x="15.66"
              y="8.33"
              fill="currentColor"
            >
              <animate
                attributeName="x"
                begin="SVGzjrPLenI.begin+0.3s"
                dur="0.6s"
                values="15.66;18.66;15.66"
              />
              <animate
                attributeName="y"
                begin="SVGzjrPLenI.begin+0.3s"
                dur="0.6s"
                values="8.33;11.33;8.33"
              />
              <animate
                attributeName="width"
                begin="SVGzjrPLenI.begin+0.3s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="SVGzjrPLenI.begin+0.3s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
            <rect
              width="7.33"
              height="7.33"
              x="8.33"
              y="15.66"
              fill="currentColor"
            >
              <animate
                attributeName="x"
                begin="SVGzjrPLenI.begin+0.3s"
                dur="0.6s"
                values="8.33;11.33;8.33"
              />
              <animate
                attributeName="y"
                begin="SVGzjrPLenI.begin+0.3s"
                dur="0.6s"
                values="15.66;18.66;15.66"
              />
              <animate
                attributeName="width"
                begin="SVGzjrPLenI.begin+0.3s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="SVGzjrPLenI.begin+0.3s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
            <rect
              width="7.33"
              height="7.33"
              x="15.66"
              y="15.66"
              fill="currentColor"
            >
              <animate
                id="SVGXAURnSRI"
                attributeName="x"
                begin="SVGzjrPLenI.begin+0.4s"
                dur="0.6s"
                values="15.66;18.66;15.66"
              />
              <animate
                attributeName="y"
                begin="SVGzjrPLenI.begin+0.4s"
                dur="0.6s"
                values="15.66;18.66;15.66"
              />
              <animate
                attributeName="width"
                begin="SVGzjrPLenI.begin+0.4s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
              <animate
                attributeName="height"
                begin="SVGzjrPLenI.begin+0.4s"
                dur="0.6s"
                values="7.33;1.33;7.33"
              />
            </rect>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="font-poppins">
      <h1 className="text-icarus-5 text-3xl underline text-center">
        Imagen Estereoscopica
      </h1>
      <br />
      {/* CONTROLESS */}
      <div className="flex flex-row m-10">
        <div className="basis-1/4 text-center content-center mx-8">
          <div className="my-8">
            <div className="text-icarus-5">Girar: {rotation}</div>
            <input
              type="range"
              min={-180}
              max={180}
              step={5}
              value={rotation}
              className="my-2 range range-lg text-icarus-3 [--range-bg:#1F6A73] [--range-thumb:#051926] [--range-fill:0]"
              onChange={(e) => setRotation(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-8">
            <div className="text-icarus-5">Zoom: x{zoom}</div>
            <input
              type="range"
              min={1}
              max="3"
              step={"0.1"}
              value={zoom}
              className="my-2 range range-lg text-icarus-3 [--range-bg:#1F6A73] [--range-thumb:#051926] [--range-fill:0]"
              onChange={(e) => setZoom(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-8">
            <div className="text-icarus-5">Contraste: {contraste}</div>
            <input
              type="range"
              min="0"
              max="200"
              step={5}
              value={contraste}
              className="my-2 range range-lg text-icarus-3 [--range-bg:#1F6A73] [--range-thumb:#051926] [--range-fill:0]"
              onChange={handleContraste}
            />
          </div>
        </div>

        {/* IMAGEN */}
        <div className="basis-2/4 relative w-80 h-100% overflow-hidden rounded-xl border border-gray-300">
          <img
            className="w-full h-full object-cover transition-transform duration-20"
            style={{
              filter: `contrast(${contraste}%)`,
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
            }}
            // src="/icarus/icarus/imagen.png"
            src={urlCompleta}
            alt="Imagen Estereoscopica"
            onError={() => setError(true)}
          />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Imagen;
