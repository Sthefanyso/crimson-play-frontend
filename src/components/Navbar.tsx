import NavItem from "../components/Navigation/NavItem";

function Navbar() {
  return (
    <nav className="h-20 w-full bg-neutral-700 text-neutral-0">
      <div className="flex h-full items-center justify-between px-4">
      <span>Logo</span>

      <div className="ml-12 flex gap-8">
        <NavItem to="/movies">Filmes</NavItem>
        <NavItem to="/series">Séries</NavItem>
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