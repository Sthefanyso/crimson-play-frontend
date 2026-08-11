import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Movies} from "../modules/movies/pages/Movies";
import { Series } from "../modules/series/pages/Series";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;