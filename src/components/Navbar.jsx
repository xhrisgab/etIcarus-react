import { Link } from 'react-router-dom';
const Navbar = () => {
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Acerca de', path: '/about' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Involúcrate', path: '/involve' },
    { name: 'Contacto', path: '/contact' },
  ];
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
            ICARUS
          </a>
        </div>
        <div className="flex items-center space-x-8 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-gray-300 hover:text-icarus-4 hover:font-extrabold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full" />
            </Link>))
          }
        </div>
        
      </div>
      <div className="m-2 divide-amber-50"></div>
    </>
  );
};
export default Navbar;
