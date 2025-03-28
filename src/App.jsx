import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/Login";
import Paintings from "./views/Paintings";
import Artists from "./views/Artists";
import Gallery from "./views/Gallery";
import About from "./views/About";
import PageNotFound from "./views/PageNotFound";
import Genres from "./views/Genres";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route path="paintings" element={<Paintings />} />
          <Route path="artists" element={<Artists />} />
          <Route path="galleries" element={<Gallery />}>
            {/* this route doesnt work idk */}
            <Route path="genres" element={<Genres />} />
          </Route>
          <Route path="about" element={<About />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
