import { Link } from "react-router-dom";

function Movies() {

  return (
  <div className="bg-background h-screen w-screen text-neutral-0">
      <h1>CrimsonPlay</h1>
        <Link to="/movies/123">
          Testar detalhes
        </Link>
        <p>Teste</p>
    </div>
    
  );
}

export default Movies;
