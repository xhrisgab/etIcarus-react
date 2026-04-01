const Layout = () => {
  return (
    <>
      <div class="grid grid-cols-4 gap-4 m-10">
        <div>
          <h1 className="text-icarus-4 text-center text-xl">Puerto Serial</h1>
          <div className="flex my-2">
            <input
              type="text"
              className="input-accent bg-icarus-4 border-3 border-icarus-2 text-black text-center font-bold"
              placeholder="Puerto seleccionado..."
              value={""}
              disabled
            />
            <button className="btn border-icarus-2 border-3 mx-2 text-icarus-3 bg-icarus-4">
              Conectar
            </button>
          </div>
          <div>
            <textarea
              className="my-2 w-full h-20 resize-none bg-icarus-1 border-icarus-5 text-icarus-3 border-2 "
              name="Logs"
              id="logs"
              value={`* ${"Hola1"}
* ${"Hola2"}
* ${"Hola1"} `}
            ></textarea>
          </div>
          <button className="btn border-icarus-2 border-3 text-icarus-3 bg-icarus-4 w-full">
            Empezar mision!
          </button>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="grid grid-cols-4 gap-4"></div>
    </>
  );
};

export default Layout;
