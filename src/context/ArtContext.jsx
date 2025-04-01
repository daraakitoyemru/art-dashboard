import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "@uidotdev/usehooks";

const ArtContext = createContext({
  artists: [],
  galleries: [],
  paintings: [],
  genres: [],
  loading: true,
  error: null,
});
const BASE_URL = "https://art-api-he4r.onrender.com/api";

const ArtProvider = ({ children }) => {
  const [artists, setArtists] = useLocalStorage("artists", []);
  const [galleries, setGalleries] = useLocalStorage("galleries", []);
  const [paintings, setPaintings] = useLocalStorage("paintings", []);
  const [genres, setGenres] = useLocalStorage("genres", []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch data

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (
          artists.length === 0 ||
          galleries.length === 0 ||
          paintings.length === 0 ||
          genres.length === 0
        ) {
          setLoading(true);

          const [artistData, galleryData, paintingData, genreData] =
            await Promise.all([
              axios.get(`${BASE_URL}/artists`),
              axios.get(`${BASE_URL}/galleries`),
              axios.get(`${BASE_URL}/paintings`),
              axios.get(`${BASE_URL}/genres`),
            ]);

          setArtists(artistData.data);
          setGalleries(galleryData.data);
          setPaintings(paintingData.data);
          setGenres(genreData.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [
    artists.length,
    galleries.length,
    paintings.length,
    genres.length,
    setArtists,
    setGalleries,
    setPaintings,
    setGenres,
  ]);

  return (
    <ArtContext.Provider
      value={{ artists, genres, paintings, galleries, loading, error }}>
      {children}
    </ArtContext.Provider>
  );
};

export { ArtProvider };
export default ArtContext;
