import NavItem from "../components/Navigation/NavItem";

function Navbar() {
  return (
    <nav className="h-20 w-full bg-neutral-700 text-neutral-0">
      <div className="flex h-full w-full items-center justify-between px-6">
      <div className="flex items-center gap-12">
      <span>Logo</span>

      <div className="flex gap-8">
        <NavItem to="/movies">Filmes</NavItem>
        <NavItem to="/series">Séries</NavItem>
      </div>
      </div>

      <div className="flex items-center gap-8">
        <button>Busca</button>
        <button>Usuário</button>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;