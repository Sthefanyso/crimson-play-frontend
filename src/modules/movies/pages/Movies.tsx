import { Link } from "react-router-dom";

function Movies() {

  return (
    <div>
      <h1>CrimsonPlay</h1>

        <Link to="/movies/123">
          Testar detalhes
        </Link>
    </div>
  );
}

export default Movies;
