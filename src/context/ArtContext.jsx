import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ArtContext = createContext({
  artists: [],
  galleries: [],
  paintings: [],
  loading: true,
  error: null,
});
const BASE_URL = "https://art-api-he4r.onrender.com/api";

const ArtProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch data

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [artistData, galleryData, paintingData] = await Promise.all([
          axios.get(`${BASE_URL}/artists`),
          axios.get(`${BASE_URL}/galleries`),
          axios.get(`${BASE_URL}/paintings`),
        ]);

        setArtists(artistData.data);
        setGalleries(galleryData.data);
        setPaintings(paintingData.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ArtContext.Provider
      value={{ artists, paintings, galleries, loading, error }}>
      {children}
    </ArtContext.Provider>
  );
};

export { ArtProvider };
export default ArtContext;
