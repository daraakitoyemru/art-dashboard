import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/Login";
import Paintings from "./views/Paintings";
import Artists from "./views/Artists";
import Gallery from "./views/Gallery";
import About from "./views/About";
import PageNotFound from "./views/PageNotFound";
import Genres from "./views/Genres";
import Layout from "./components/Layout";
import { ArtProvider } from "./context/ArtContext";

const App = () => {
  return (
    <ArtProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="paintings" element={<Paintings />} />
            <Route path="artists" element={<Artists />} />
            <Route path="galleries" element={<Gallery />} />
            <Route path="genres" element={<Genres />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ArtProvider>
  );
};

export default App;
