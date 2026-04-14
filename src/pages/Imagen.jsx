import { useState } from "react";

const Imagen = () => {
  const [contraste, setContraste] = useState(100);

  const handleContraste = (e) => {
    const newContraste = e.target.value;
    setContraste(newContraste);
  };

  const [zoom, setZoom] = useState(1);

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
            <div className="text-icarus-5">Girar</div>
            <input
              type="range"
              min={0}
              max="100"
              //   value={"40"}
              className="my-2 range range-lg text-icarus-3 [--range-bg:#1F6A73] [--range-thumb:#051926] [--range-fill:0]"
            />
          </div>
          <div className="my-8">
            <div className="text-icarus-5">Zoom</div>
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
            style={{ filter: `contrast(${contraste}%)` }}
            src="/imagen.png"
            alt="Imagen Estereoscopica"
          />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Imagen;
