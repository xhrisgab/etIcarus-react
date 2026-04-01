const Altura = () => {
  return (
    <div className="card card-border bg-icarus-2 h-80">
      <div className="card-body">
        <h1 className="card-title justify-center">
          <div className="text-icarus-5 text-lg">
            Altura - <span className="text-icarus-4">{"423"}</span> [m]
          </div>
        </h1>

        <progress
          className="progress rotate-270 h-15 w-32 m-auto mt-10"
          value="450"
          max="500"
        ></progress>

        <div className="card-actions justify-center mt-22">
          <button className="btn bg-icarus-1 border-icarus-4 border-2 text-icarus-4 rounded-2xl hover:bg-icarus-5">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Altura;
