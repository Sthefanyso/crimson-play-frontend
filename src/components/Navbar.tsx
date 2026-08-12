function Navbar() {
  return (
    <nav>
      <span>Logo</span>
      <div>
        <a href="/movies">Filmes</a>
        <a href="/series">Séries</a>
      </div>

      <div>
        <button>Busca</button>
        <button>Usuário</button>
      </div>
    </nav>
  );
}

export default Navbar;