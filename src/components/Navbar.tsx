import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-20 w-full bg-neutral-700 text-neutral-0">
      <div className="flex h-full items-center px-6">
      <span>Logo</span>

      <div className="ml-12 flex gap-8">
        <NavLink to="/movies">Filmes</NavLink>
        <NavLink to="/series">Séries</NavLink>
      </div>

      <div className="ml-auto flex items-center gap-8">
        <button>Busca</button>
        <button>Usuário</button>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;