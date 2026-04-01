const Navbar = () => {
  return (
    <>
      <div className="navbar bg-icarus-1 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img
              alt="Your Company"
              src="https://hndrkm.github.io/IcarusWeb/assets/logo-C65US6vX.png"
              className="h-8 w-auto"
            />
            Icarus
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Acerca de</a>
            </li>
            <li>
              <a>Proyectos</a>
            </li>
            <li>
              <a>Involucrate</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider divide-amber-50"></div>
    </>
  );
};
export default Navbar;
