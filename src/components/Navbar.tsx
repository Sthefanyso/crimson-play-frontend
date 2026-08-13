import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <span>Logo</span>
      <div>
        <NavLink to="/movies">Filmes</NavLink>
        <NavLink to="/series">Séries</NavLink>
      </div>

      <div>
        <button>Busca</button>
        <button>Usuário</button>
      </div>
    </nav>
  );
}

export default Navbar;