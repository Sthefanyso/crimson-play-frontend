import { Link } from "react-router-dom";

function Series() {

  return (
    <div className="bg-background h-screen w-screen text-neutral-0">
      <h1>CrimsonPlay</h1>
      <h4>Page Series Test</h4>
      <Link to="/series/456">
         Testar detalhes
      </Link>
    </div>
  );
}

export default Series;
