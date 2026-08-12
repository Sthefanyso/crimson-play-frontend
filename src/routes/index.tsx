import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Movies from "../modules/movies/pages/Movies";
import Series from "../modules/series/pages/Series";
import SeriesDetails from "../modules/series/pages/SeriesDetails";
import MoviesDetails from "../modules/movies/pages/MoviesDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />

        <Route path="/series" element={<Series />} />
        <Route path="/series/:id" element={<SeriesDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;